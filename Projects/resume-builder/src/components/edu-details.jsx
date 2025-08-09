function EducationalDetails(props) {
  const { handleEducationalInfo } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    event.target.reset();

    const institution = formData.get("institution");
    const degree = formData.get("degree");
    const startDate = formData.get("startDate");
    const endDate = formData.get("endDate");

    handleEducationalInfo({ institution, degree, startDate, endDate });
  };

  return (
    <section className="education-details">
      <h1>Educational Details</h1>
      <form onSubmit={handleSubmit} className="education-details-form">
        <label htmlFor="institution">Enter the institution: </label>
        <input type="text" id="institution" name="institution" placeholder="" />

        <label htmlFor="degree">Enter the degree: </label>
        <input type="text" name="degree" id="degree" placeholder="" />

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

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default EducationalDetails;
