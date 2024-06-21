import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { gql } from 'graphql-tag';
import fs from 'fs';
import path from 'path';
import { resolvers } from './graphql/resolvers'; // Assuming resolvers is exported as an object of type Resolvers

// Load schema from schema.graphql file
const typeDefs = gql(fs.readFileSync(path.join(path.dirname(new URL(import.meta.url).pathname), 'schema.graphql'), 'utf8'));

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server using startStandaloneServer
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
