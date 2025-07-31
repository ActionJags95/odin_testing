import Connection from "./room";
import { useEffect } from "react";

function Component(props) {
  const roomId = props.roomId;
  console.log(roomId);

  useEffect(() => {
    const connection = new Connection("127.0.0.1:1234", roomId);
    connection.connect();
    console.log(connection.activeConnections);

    return () => connection.disconnect;
  }, [roomId]);

  return (
    <>
      <p>Connected to {roomId}</p>
    </>
  )
}

export default Component;