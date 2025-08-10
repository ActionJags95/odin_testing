import "./common.css";
import "./work-exp.css";

function WorkExperience(props) {
  const { handleWorkExperience } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    event.target.reset();

    const company = formData.get("company");
    const title = formData.get("title");
    const startDate = formData.get("startDate");
    const endDate = formData.get("endDate");
    const description = formData.get("description");

    handleWorkExperience({ company, title, startDate, endDate, description });
  };

  return (
    <section className="work-experience">
      <h1>Work Experience</h1>
      <form onSubmit={handleSubmit} className="work-experience-form">
        <div id="companyInput" className="input-field">
          <label htmlFor="Company">Company: </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder=""
            className="input-item"
          />
        </div>

        <div id="titleInput" className="input-field">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder=""
            className="input-item"
          />
        </div>

        <div className="dates">
          <div className="input-field">
            <label htmlFor="startDate">Start-Date: </label>
            <input
              type="text"
              id="startDate"
              name="startDate"
              placeholder="MM/YYYY"
              className="input-item"
            />
          </div>

          <div className="input-field">
            <label htmlFor="endDate">End-Date: </label>
            <input
              type="text"
              id="endDate"
              name="endDate"
              placeholder="MM/YYYY"
              className="input-item"
            />
          </div>
        </div>

        <div id="desc">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description"></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default WorkExperience;
