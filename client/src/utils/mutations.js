import gql from 'graphql-tag';
//Login_User will execute the loginUser mutation set up using Apollo Server
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
        _id
        username
        }
    }
}
`;
//ADD_USER will execute addUser
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
    token
    user {
        

//SAVE_BOOK will execute saveBook mutation

//REMOVE_BOOK will execute the removeBook mutation 