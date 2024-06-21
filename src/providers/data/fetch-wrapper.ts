import { GraphQLFormattedError } from "graphql";

type Error = {
  message: string;
  statusCode: string;
};
//middleware function for every single fetch we make and upgraded it with custom error handling 
const customFetch = async (url: string, options: RequestInit) => {
  const accessToken = localStorage.getItem("access_token");
  const headers = options.headers as Record<string, string>;

  return await fetch(url, {
    ...options,
    headers: {
      ...headers,
      Authorization: headers?.Authorization || `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Apollo-Require-Preflight": "true",   //graphql client to make requests to Graphql API.
    },
  });
};
// Error handling Solution for GraphQLErrors

const getGraphQLErrors = (
  body: Record<"errors", GraphQLFormattedError[] | undefined>,): Error | null => {
  if (!body) {
    return {
      message: "Unknown error",
      statusCode: "INTERNAL_SERVER_ERROR",
    };
  }

  if ("errors" in body) {
    const errors = body?.errors;
    const messages = errors?.map((error) => error?.message)?.join("");
    const code = errors?.[0]?.extensions?.code;

    if (typeof code === "string") {
      return {
        message: messages || JSON.stringify(errors),
        statusCode: code,
      };
    } else {
      return {
        message: messages || JSON.stringify(errors),
        statusCode: "INTERNAL_SERVER_ERROR",
      };
    }
  }

  return null;
};

export const fetchWrapper = async (url: string, options: RequestInit) => {
  const response = await customFetch(url, options);
  
  //process the response in multiple ways 
  const responseClone = response.clone();
  const body = await responseClone.json();
  const error = getGraphQLErrors(body);

  if (error) {
    throw error;
  }

  return response;
};