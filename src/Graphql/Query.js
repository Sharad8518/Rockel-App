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

export const QUERY_GET_ALL_INVOICE = gql`
query GetAllInvoice {
  getAllInvoice {
    id
    invoiceNumber
    customerId
    customerUniqueId
    containerId
    containerUniqueId
    recipientName
    email
    phoneOne
    phoneTwo
    phoneThree
    addressOne
    addressTwo
    postCode
    totalCost
    createdDateTime
    status
    items {
      id
      itemId
      itemType
      itemDescription
      length
      height
      weight
      quantity
      costPerItem
    }
  }
}
`

export const QUERY_GET_BOOKING_STATUS_PENDING = gql`
query GetBookingStatusPending {
  getBookingStatusPending {
    id
    bookDateAndTime
    pickUpDate
    pickUpTime
    notes
    allocation
    customerId
    collectionBoyId
    collectionName
    collectionBoyuniqueId
    createDateAndTime
    status
  }
}
`

export const QUERY_GET_ALL_COLLECTION_BOY = gql`
query GetAllCollectionStaff {
  getAllCollectionStaff {
    id
    uniqueId
    fName
    lName
    email
    phone
    address
    createdDateTime
    status
  
  }
}

`