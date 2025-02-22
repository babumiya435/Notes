// import { provideApollo } from '@apollo/angular';
// import { APOLLO_OPTIONS } from '@apollo/angular';
// import { HttpLink } from '@apollo/client/core';
// import { InMemoryCache, ApolloClientOptions } from '@apollo/client/core';
// import { inject } from '@angular/core';

// export function createApolloConfig(): ApolloClientOptions<any> {
//   return {
//     cache: new InMemoryCache(), // Enables Apollo caching
//     link: inject(HttpLink).create({
//       uri: 'https://your-graphql-endpoint.com/graphql', // Replace with your API URL
//     }),
//     defaultOptions: {
//       watchQuery: {
//         fetchPolicy: 'cache-and-network', // Avoids stale data
//       },
//     },
//   };
// }

// // Export providers for GraphQL
// export const provideGraphQL = [
//   provideApollo(createApolloConfig),
//   { provide: APOLLO_OPTIONS, useFactory: createApolloConfig, deps: [HttpLink] },
// ];


// // import { EnvironmentInjector, inject, NgModule } from "@angular/core";
// // import {APOLLO_OPTIONS, provideApollo} from "apollo-angular";
// // import {ApolloClient, ApolloClientOptions, HttpLink, InMemoryCache} from "@apollo/client/core";

// // const uri = 'https://graphqlzero.almansi.me/api'; // Dummy GraphQL API

// // export function createApolloConfig(): ApolloClientOptions<any>{
// //     return new ApolloClient({
// //         link: new HttpLink({uri}),
// //         cache: new InMemoryCache()
// //     })
// // }

// // // @NgModule({
// // //     providers: [
// // //         {
// // //             provide: APOLLO_OPTIONS,
// // //             useFactory: createApolloConfig
// // //         }
// // //     ],
// // // })

// // // export class GraphQLModule{}

// // export const provideGraphQL = [
// //     // provideApollo(()=> inject(EnvironmentInjector).runInContext(createApolloConfig)),
// //     provideApollo(createApolloConfig),
// //   { provide: APOLLO_OPTIONS, useFactory: createApolloConfig, deps: [HttpLink] },
// // ];