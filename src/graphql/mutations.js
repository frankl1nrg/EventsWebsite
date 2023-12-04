/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createReservation = /* GraphQL */ `
  mutation CreateReservation(
    $input: CreateReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    createReservation(input: $input, condition: $condition) {
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
export const updateReservation = /* GraphQL */ `
  mutation UpdateReservation(
    $input: UpdateReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    updateReservation(input: $input, condition: $condition) {
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
export const deleteReservation = /* GraphQL */ `
  mutation DeleteReservation(
    $input: DeleteReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    deleteReservation(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
