import { gql } from '@apollo/client/core';
import { DocumentNode } from "graphql";

export const GET_POSTS: DocumentNode = gql `
    query {
        posts {
            data {
                id
                title
                body
            }
        }
    }
`;

export const CREATE_POST:DocumentNode = gql `
    mutation createPost($input: CreatePostInput!){
        createPost(input: $input) {
            id
            title
            body
        }
    }
`;

export const GET_USERS = gql `
    query {
        users {
            data {
                id
                name
                username
                phone
            }
        }
    }
`;

export const CREATE_USER = gql `
    mutation createUser($input: CreateUserInput!) {
        createUser(input: $input) {
            id
            name
            username
            email
            phone
        }
    }
`;

export const GET_USER = gql`
    query user($id: ID!){
    user(id : $id){
        id
        name
        username   
    } 
    }
`;

export const GET_POST = gql `
    query post($id: ID!){
    post(id : $id){
        id
        title
        body
    }
    }
`;