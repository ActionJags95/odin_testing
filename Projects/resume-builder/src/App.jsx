import { useState } from "react";
import GeneralInfo from "./components/input-area/general-info.jsx";
import EducationalDetails from "./components/input-area/edu-details";
import WorkExperience from "./components/input-area/work-exp";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const handleNameChange = (newName) => setName(newName);

  const [email, setEmail] = useState("");
  const handleEmailChange = (newEmail) => setEmail(newEmail);

  const [contactNumber, setContactNumber] = useState("");
  const handleContactChange = (newContactNumber) =>
    setContactNumber(newContactNumber);

  const [educationInfo, setEducationInfo] = useState([]);
  const handleEducationalInfo = (educationalData) => {
    setEducationInfo((prevData) => [...prevData, educationalData]);
    console.log(educationInfo);
  };

  const [workExperience, setWorkExperience] = useState([]);
  const handleWorkExperience = (workExpItem) => {
    setWorkExperience((prevWorkExpInfo) => [...prevWorkExpInfo, workExpItem]);
    console.log(workExperience);
  };

  return (
    <div className="resume-builder">
      <section className="input-section">
        <GeneralInfo
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handleContactChange={handleContactChange}
          data={(name, email, contactNumber)}
        />
        <EducationalDetails handleEducationalInfo={handleEducationalInfo} />
        <WorkExperience handleWorkExperience={handleWorkExperience} />
      </section>
      <section className="resume-output"></section>

      <p>{email}</p>
      <p>{name}</p>
      <p>{contactNumber}</p>
    </div>
  );
}

export default App;
