import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, split } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const http = httpLink.create({
    uri: "https://api-staging.csgoroll.com/graphql",
    withCredentials: true
  });

  const ws = new WebSocketLink({
    uri: `wss://api-staging.csgoroll.com/graphql`,
    options: {
      reconnect: true
    },
  });

  const link = split(
    ({ query }) => {
      const definitions = getMainDefinition(query);
      return (
        definitions.kind === 'OperationDefinition' && definitions.operation === 'subscription'
      );
    },
    ws,
    http,
  );

  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
