/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReservation = /* GraphQL */ `
  query GetReservation($id: ID!) {
    getReservation(id: $id) {
      id
      datetime
      User {
        id
        name
        lastName
        email
        createdAt
        updatedAt
        __typename
      }
      Event {
        id
        description
        start_datetime
        end_datetime
        location
        ticketAvailability
        imageURL
        title
        createdAt
        updatedAt
        eventUserId
        eventCategoryId
        __typename
      }
      createdAt
      updatedAt
      reservationUserId
      reservationEventId
      __typename
    }
  }
`;
export const listReservations = /* GraphQL */ `
  query ListReservations(
    $filter: ModelReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        datetime
        createdAt
        updatedAt
        reservationUserId
        reservationEventId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      lastName
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lastName
        email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      description
      start_datetime
      end_datetime
      location
      ticketAvailability
      imageURL
      title
      User {
        id
        name
        lastName
        email
        createdAt
        updatedAt
        __typename
      }
      Category {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      eventUserId
      eventCategoryId
      __typename
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        start_datetime
        end_datetime
        location
        ticketAvailability
        imageURL
        title
        createdAt
        updatedAt
        eventUserId
        eventCategoryId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
