import {gql} from '@apollo/client'

export const CHANGE_USERNAME = gql`
mutation changeUsername($userId:ID!, $newUsername:String!){
    changeUsername(userId:$userId, newUsername:$newUsername){
        first_name,
        last_name,
        email,
        username
    }
}
`