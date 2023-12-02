/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      userid
      description
      start_datetime
      end_datetime
      location
      ticketAvailability
      imageURL
      title
      category
      createdAt
      updatedAt
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
      userid
      description
      start_datetime
      end_datetime
      location
      ticketAvailability
      imageURL
      title
      category
      createdAt
      updatedAt
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
      userid
      description
      start_datetime
      end_datetime
      location
      ticketAvailability
      imageURL
      title
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
