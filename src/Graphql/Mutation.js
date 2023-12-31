import { gql } from '@apollo/client';


export const MUTATION_CUSTOMER = gql`
mutation Mutation($customerInput: customerInput) {
    createCustomer(CustomerInput: $customerInput) {
      id
     
    }
  }
`

export const MUTATION_EDIT_CUSTOMER = gql`
mutation Mutation($editCustomerInput: editCustomerInput) {
  editCustomer(EditCustomerInput: $editCustomerInput) {
    id
   
  
  }
}
`

export const MUTATION_DELETE_CUSTOMER = gql`
mutation DeleteCustomer($customerId: ID) {
  deleteCustomer(customerId: $customerId) {
    id
  
  }
}
`

export const MUTATION_ADD_INVOICE = gql`
mutation Mutation($invoiceInput: invoiceInput) {
  createInvoice(InvoiceInput: $invoiceInput) {
    id
  
  }
}

` 

export const MUTATION_LOGIN_LONDON = gql`
mutation Mutation($userName: String, $password: String) {
  londonStattLogin(userName: $userName, password: $password) {
    londonId
    londonToken
  }
}
`

export const MUTATION_ADD_BOOKING = gql`
mutation CreateBooking($bookingInput: bookingInput) {
  createBooking(BookingInput: $bookingInput) {
    id
   
  }
}
`

export const MUTATION_UPDATE_BOOKING = gql`
mutation Mutation($editBookingInput: editBookingInput) {
  editBooking(EditBookingInput: $editBookingInput) {
    id
    
  }
}
`

export const MUTATION_EDIT_INVOICE = gql`
mutation EditInvoice($editInvoiceInput: editInvoiceInput) {
  editInvoice(EditInvoiceInput: $editInvoiceInput) {
    id
  
  }
}

`