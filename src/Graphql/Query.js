import { gql } from '@apollo/client';

export const QUERY_ALL_CUSTOMER = gql`
query GetAllCustomer {
  getAllCustomer {
    id
    customerUniqueId
    fName
    lName
    company
    email
    phoneOne
    phoneTwo
    phoneThree
    addressOne
    addresstwo
    postCode
    webPage
    notes
    area
    createdDateTime
    status
  }
}

`

export const QUERY_GET_USER_BY_ID  =gql`
query Query($userId: ID) {
  getLondonById(userId: $userId) {
    id
    userName
    password
    role
    createDataAndTime
    status
  }
}
`