import { useState } from "react";
import GeneralInfo from "./components/input-area/general-info.jsx";
import EducationalDetails from "./components/input-area/edu-details";
import WorkExperience from "./components/input-area/work-exp";
import "./App.css";
function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const handleGeneralInfo = (generalData) => {
    setGeneralInfo(generalData);
    console.log(generalData);
  };

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
        <GeneralInfo handleGeneralInfo={handleGeneralInfo} />
        <EducationalDetails handleEducationalInfo={handleEducationalInfo} />
        <WorkExperience handleWorkExperience={handleWorkExperience} />
      </section>
      <section className="resume-output"></section>
    </div>
  );
}

export default App;
