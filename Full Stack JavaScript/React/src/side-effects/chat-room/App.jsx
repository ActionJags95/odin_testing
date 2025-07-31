import Component from "./comp";
import { useState } from "react";

function Appi() {
  const [roomId, changeRoomId] = useState("");
  const [show, setShow] = useState(false);

  const handleRoomChange = (event) => {
    changeRoomId(event.target.value);
  };
  const handleShowChange = () => setShow((prevShow) => !prevShow);

  return (
    <section>
      <label htmlFor="room">Select the room: </label>
      <select name="room" id="room" value={roomId} onChange={handleRoomChange}>
        <option value="general">general</option>
        <option value="travel">travel</option>
        <option value="music">music</option>
      </select>
      <button onClick={handleShowChange}>
        {show ? "Close Chat" : "Show Chat"}
      </button>

      {show && <Component roomId={roomId} />}
    </section>
  );
}

export default Appi;
