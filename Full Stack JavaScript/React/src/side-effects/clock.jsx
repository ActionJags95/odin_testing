import { useState, useEffect } from "react";

function Clock() {
  const [counter, updateCounter] = useState(0);

  useEffect(() => {
    // This hook takes the calculations outside the render environment

    // Execution of the side effect
    const interval = setInterval(() => {
      updateCounter((prevCount) => prevCount + 1);
    }, 1000);

    // Returning the cleanup of the side effect
    return () => clearInterval(interval);
  }, [/* Entities, running the useEffect when got changed */]);

  return <p>{counter} seconds have passed.</p>;
}

export default Clock;

// Use effect hook takes the calculations inside outside the react render calculations
// useEffect hook takes dependencies array as another argument apart from the callback calling the calculations
// The array is the array of dependencies, that means, whenever on of the arguments in the array updates, useEffect resets and starts from beginning
// By default it re-renders completely, so empty array must be provided.
