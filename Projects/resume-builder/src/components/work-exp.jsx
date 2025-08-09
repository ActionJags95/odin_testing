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
        <label htmlFor="Company">Company: </label>
        <input type="text" id="company" name="company" placeholder="" />

        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title" placeholder="" />

        <div className="dates">
          <label htmlFor="startDate">Start-Date: </label>
          <input
            type="text"
            id="startDate"
            name="startDate"
            placeholder="MM/YYYY"
          />

          <label htmlFor="endDate">End-Date: </label>
          <input
            type="text"
            id="endDate"
            name="endDate"
            placeholder="MM/YYYY"
          />
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
