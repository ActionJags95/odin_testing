import { useState } from "react";

function Input() {
  const [message, setMessage] = useState("Hi!"); // Initial message for the input box
  // console.log(message); --> Logs the current value of the message everytime there is a change in the input box
  return (
    <>
      <input
        type="text"
        value={message}
        onChange={(event) => {
          setMessage(event.target.value); // Setting the state variable everytime there is a change with the input variable
        }}
      />
    </>
  );
}

export default Input;

// Instead of input element maintaining it's own state, we will create a state variable for the input box with an initial value
// Everytime the input box triggers the change, we will change the value of the state variable using the hook
// This ensures that, latest value is there available with us preventing loss of data and ensuring real time updation