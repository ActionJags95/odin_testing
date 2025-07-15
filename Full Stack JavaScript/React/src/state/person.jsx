import { useState } from "react";

function Person({details}) {
  // console.log(props);
  const [person, setPerson] = useState(details);
  let { name, age, number, isFavorite } = person;

  const changeDetails = () => {
    setPerson((pervPerson) => {
      return { ...pervPerson, isFavorite: !isFavorite };
    });
  };
  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{number}</p>
      <button onClick={changeDetails}>{isFavorite ? "Remove" : "Add"}</button>
    </>
  );
}

export default Person;
