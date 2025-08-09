import { useState } from "react";
import GeneralInfo from "./components/general-info";
import EducationalDetails from "./components/edu-details";
import WorkExperience from "./components/work-exp";
import "./App.css";
function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const handleGeneralInfo = () => {};
  const [educationInfo, setEducationInfo] = useState({});
  const handleEducationalInfo = () => {};
  const [workExperience, setWorkExperience] = useState({});
  const handleWorkExperience = () => {};

  return (
    <div>
      <GeneralInfo handleGeneralInfo={handleGeneralInfo} />
      <EducationalDetails handleEducationalInfo={handleEducationalInfo} />
      <WorkExperience handleWorkExperience={handleWorkExperience} />
    </div>
  );
}

export default App;
