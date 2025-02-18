import { AuthBindings } from "@refinedev/core";

import { API_URL, dataProvider } from "./data";

// For demo purposes and to make it easier to test the app, you can use the following credentials
export const authCredentials = {
  email: "michael.scott@dundermifflin.com",
  password: "demodemo",
};

export const authProvider: AuthBindings = {
  login: async ({ email }) => {
    try {
      // Call the login mutation
      // dataProvider.custom is used to make a custom request to the GraphQL API
      const { data } = await dataProvider.custom({
        url: API_URL,
        method: "post",
        headers: {},
        meta: {
          variables: { email },
          // Pass the email to see if the user exists and if so, return the accessToken
          rawQuery: `
            mutation Login($email: String!) {
              login(loginInput: { email: $email }) {
                accessToken
              }
            }
          `,
        },
      });

      // Save the accessToken in localStorage
      localStorage.setItem("access_token", data.login.accessToken);

      return {
        success: true,
        redirectTo: "/",
      };
    } catch (e) {
      const error = e as Error;

      return {
        success: false,
        error: {
          message: "message" in error ? error.message : "Login failed",
          name: "name" in error ? error.name : "Invalid email or password",
        },
      };
    }
  },

  // Simply remove the accessToken from localStorage for the logout
  logout: async () => {
    localStorage.removeItem("access_token");

    return {
      success: true,
      redirectTo: "/login",
    };
  },

  onError: async (error) => {
    // A check to see if the error is an authentication error
    // if so, set logout to true
    if (error.statusCode === "UNAUTHENTICATED") {
      return {
        logout: true,
        ...error,
      };
    }

    return { error };
  },

  check: async () => {
    try {
      // Get the identity of the user
      // this is to know if the user is authenticated or not
      await dataProvider.custom({
        url: API_URL,
        method: "post",
        headers: {},
        meta: {
          rawQuery: `
            query Me {
              me {
                name
              }
            }
          `,
        },
      });

      // If the user is authenticated, redirect to the home page
      return {
        authenticated: true,
        redirectTo: "/",
      };
    } catch (error) {
      // For any other error, redirect to the login page
      return {
        authenticated: false,
        redirectTo: "/login",
      };
    }
  },

  // Get the user information
  getIdentity: async () => {
    const accessToken = localStorage.getItem("access_token");

    try {
      // Call the GraphQL API to get the user information
      // Adjust the query to include the new fields
      const { data } = await dataProvider.custom<{ me: any }>({
        url: API_URL,
        method: "post",
        headers: accessToken
          ? {
              // Send the accessToken in the Authorization header
              Authorization: `Bearer ${accessToken}`,
            }
          : {},
        meta: {
          // Get the user information such as name, email, etc.
          rawQuery: `
            query Me {
              me {
                id
                name
                email
                phone
                PoliceID
                rank
                timezone
                avatarUrl
                assignedStation {
                  id
                  name
                  location
                }
              }
            }
          `,
        },
      });

      return data.me;
    } catch (error) {
      return undefined;
    }
  },
};
