import graphqlDataProvider, {
    GraphQLClient,
    liveProvider as graphqlLiveProvider,
  } from "@refinedev/nestjs-query";
  
  import { createClient } from "graphql-ws";
  
  import { fetchWrapper } from "./fetch-wrapper";
  
  export const API_BASE_URL = "https://api.crm.refine.dev";
  export const API_URL = `${API_BASE_URL}/graphql`;
  export const WS_URL = "wss://api.crm.refine.dev/graphql"; //refine websocket API
  
  export const client = new GraphQLClient(API_URL, {
    fetch: (url: string, options: RequestInit) => {
      try {
        return fetchWrapper(url, options);
      } catch (error) {
        return Promise.reject(error as Error);
      }
    },
  });
  // using graphql library for creating websocket for live provider to update thing in real time.
  export const wsClient = typeof window !== "undefined"
      ? createClient({
          url: WS_URL,
          connectionParams: () => {
            const accessToken = localStorage.getItem("access_token");
  
            return {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
             };
          },
        })
      : undefined
  // to make request to graphql APIs
  export const dataProvider = graphqlDataProvider(client);
  
  export const liveProvider = wsClient ? graphqlLiveProvider(wsClient) : undefined;
  