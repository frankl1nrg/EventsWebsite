/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateReservation = /* GraphQL */ `
  subscription OnCreateReservation(
    $filter: ModelSubscriptionReservationFilterInput
  ) {
    onCreateReservation(filter: $filter) {
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
export const onUpdateReservation = /* GraphQL */ `
  subscription OnUpdateReservation(
    $filter: ModelSubscriptionReservationFilterInput
  ) {
    onUpdateReservation(filter: $filter) {
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
export const onDeleteReservation = /* GraphQL */ `
  subscription OnDeleteReservation(
    $filter: ModelSubscriptionReservationFilterInput
  ) {
    onDeleteReservation(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
