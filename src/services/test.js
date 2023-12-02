const { generateClient } = require("amplify/backend/api/EventsWebsite");
const { createEvent } = require('src/graphql/mutations');

async function createNewEvent() {
  const client = generateClient();

  const newEvent = await client.graphql({
    query: createEvent,
    variables: {
      input: {
        userid: "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
        description: "Lorem ipsum dolor sit amet",
        start_datetime: "1970-01-01T12:30:23.999Z",
        end_datetime: "1970-01-01T12:30:23.999Z",
        location: JSON.stringify([]), // Assuming location is meant to be a JSON object
        ticketAvailability: 1020,
        imageURL: "http://example.com/image.jpg",
        title: "Event Title",
        category: "Event Category"
      }
    }
  });

  console.log(newEvent);
}

createNewEvent().catch((error) => {
  console.error("Error creating new event:", error);
});
