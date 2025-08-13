import "./index.css";
import GeneralInfo from "./generalInfo";
import WorkExpInfo from "./workExp";
function Resume(props) {
  const { data, eduInfo, workExp } = props;
  console.log(props);
  return (
    <div id="resume-area">
      <div id="resume">
        <GeneralInfo data={data} />
        <WorkExpInfo workExp={workExp} />
      </div>
    </div>
  );
}

export default Resume;
