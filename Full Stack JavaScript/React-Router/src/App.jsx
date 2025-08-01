import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <h1>Hello form the main page of the app!</h1>
        <p>Here are some examples of links to other pages</p>
        <nav>
          <ul>
            <li>
              <Link to="profile">Profile</Link>
            </li>
            <li>
              <Link to="hello">hello</Link>
            </li>
            <li>
              <Link to="hi">hi</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
