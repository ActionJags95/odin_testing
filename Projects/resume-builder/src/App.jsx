import { useState } from "react";
import GeneralInfo from "./components/general-info";
import EducationalDetails from "./components/edu-details";
import WorkExperience from "./components/work-exp";
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
    <div>
      <GeneralInfo handleGeneralInfo={handleGeneralInfo} />
      <EducationalDetails handleEducationalInfo={handleEducationalInfo} />
      <WorkExperience handleWorkExperience={handleWorkExperience} />

      <div>
        {educationInfo.length > 0 &&
          educationInfo.map((item) => {
            return <p>{item.institution}</p>;
          })}
      </div>
    </div>
  );
}

export default App;
