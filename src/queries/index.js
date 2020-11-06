import {gql} from '@apollo/client'

export const GET_USERS_LIST = gql`
    {
        getUsers {
            id,
            first_name,
            last_name,
            email
        }
    }   
`

export const GET_USER_DETAIL = gql`
    query getUser($userId: ID!) {
        getUser(userId: $userId) {
            first_name,
            last_name,
            email,
            username
        }
    }
`

export const GET_USER_POSTS = gql`
    query getUserPosts($userId: ID!){
        getPosts(userId: $userId){
            content,
            likes,
            id
        }
    }
`

export const GET_POST_COMMENTS = gql`
    query getPostComments($postId:ID!){
        getComments(postId: $postId){
            postId,
            content,
            likes,
        }
    }
`