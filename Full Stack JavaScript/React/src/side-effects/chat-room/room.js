class Connection {
  activeConnections = 0;
  constructor(serverUrl, roomId) {
    this.serverUrl = serverUrl;
    this.roomId = roomId;
  }

  connect() {
    console.log(`Connected to ${this.roomId} at ${this.serverUrl}`);
    this.activeConnections++;
  }

  disconnect() {
    console.log(`Disconnected from ${this.roomId} at ${this.serverUrl}`);
    this.activeConnections--;
  }
}

export default Connection;
