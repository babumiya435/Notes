
import { Injectable, input } from '@angular/core';
import { ApolloClient, InMemoryCache, HttpLink, gql, NormalizedCacheObject } from '@apollo/client/core';
import { Observable, from } from 'rxjs';
import { CREATE_POST, CREATE_USER, GET_POST, GET_POSTS, GET_USER, GET_USERS } from './queries.const';

@Injectable({
    providedIn: 'root'
})
export class GraphQLService {
    private apollo: ApolloClient<NormalizedCacheObject>;
    private uri = "https://graphqlzero.almansi.me/api";
    constructor() {
        this.apollo = new ApolloClient({
            link: new HttpLink({ uri: this.uri }),
            cache: new InMemoryCache(),
        })
    }

    getPosts(): Observable<any> {
        return from(
            this.apollo.query({query: GET_POSTS})
        )
    }

    createPost(): Observable<any> {
        return from(
            this.apollo.mutate({
                mutation: CREATE_POST, 
                variables: {
                    input : {
                        title: "test-title",
                        body: "test-body"
                    }
                }
            })
        );
    }

    getUsers(): Observable<any>{
        return from(
            this.apollo.query({query: GET_USERS})
        );
    }

    createUser(): Observable<any>{
        return from(
            this.apollo.mutate({
                mutation: CREATE_USER,
                variables: {
                    input: {
                        name: "Sameer",
                        username: "Sameer",
                        email: "sameer@gmail.com",
                        phone: "1234567890"
                    }
                }
            })
        );
    }

    getUser(): Observable<any>{
        return from(
            this.apollo.query({query: GET_USER, variables: {
                id: "1"
            }})
        )
    }

    getPost(): Observable<any>{
        return from(
            this.apollo.query({query: GET_POST, variables: {
                id: "1"
            }})
        )
    }
}