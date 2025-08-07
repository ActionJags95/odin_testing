import { useParams } from "react-router-dom";
import Spinach from "./spinach.jsx";
import Popeye from "./popeye.jsx";
import DefaultProfile from "./default-profile.jsx";

function Profile() {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page</h1>
      <p>So, how are you</p>
      <hr />
      <h2>The profile visited here: </h2>
      {name === "spinach" ? (
        <Spinach />
      ) : name === "popeye" ? (
        <Popeye />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
}

export default Profile;
