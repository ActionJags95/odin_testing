const socket = new WebSocket("ws://localhost:8080");

// Executes when conection with server is successfully established
socket.addEventListener("open", (event) => {
  console.log("Websocket connection established");
  // Sending a message to websocket server when connected
  socket.send("Hello, World!");
});

// Listen for messages and execute when a message is recieved from server
socket.addEventListener("message", (event) => {
  console.log(`Message from server ${event.data}`);
});

// Execute when connection is closed, stating the close and the reason
socket.addEventListener("close", (event) => {
  console.log(`Websocket connection closed, ${event.code} and ${event.reason}`);
});

// Execuetes when a error occures during websocket communication
socket.addEventListener("error", (error) => {
  console.error(`Websocket Error: ${error}`);
});

// This is an implementation of websocket client and it connects to the server running in our device at port 8080
// That means this will execute without any error, when there is an active server running

// Sending messages
socket.addEventListener("open", () => {
  const data = {
    type: "message",
    content: "Hello from NodeJS",
  };

  socket.send(JSON.stringify(data));
});

// Recieving messages
socket.addEventListener("message", (event) => {
  try {
    const recievedData = JSON.parse(event.data);
    console.log(`Recieved JSON: ${recievedData}`);
  } catch (error) {
    console.error("Error parsing JSON", error);
    console.log(`Recieved data was ${event.data}`);
  }
});

// Node.js v22 empowers applications to seamlessly interact with WebSocket servers as clients
// but the creation of WebSocket servers within Node.js remains dependent on established libraries.
// This distinction is crucial for developers to understand when implementing real-time
// communication in their Node.js projects.

// On time of this code-editing, I am using the lts version of NodeJs. Which is NodeJS v22
