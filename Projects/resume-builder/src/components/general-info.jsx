function GeneralInfo(props) {
  const { handleGeneralInfo } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    event.target.reset();

    const name = formData.get("name");
    const email = formData.get("email");
    const contactNumber = formData.get("contactNumber");

    handleGeneralInfo({ name, email, contactNumber });
  };

  return (
    <section className="general-info">
      <h1>Enter Your details</h1>
      <form onSubmit={handleSubmit} className="general-info-form">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="eg: you@example.com"
        />
        <label htmlFor="contactNumber">Contact Number: </label>
        <input
          type="nubmer"
          name="contactNumber"
          id="contactNumber"
          placeholder=""
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default GeneralInfo;
