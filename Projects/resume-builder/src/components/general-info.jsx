function GeneralInfo(props) {
  const { handleGeneralInfo } = props;
  const handleSubmit = (event) => {};

  return (
    <section className="general-info">
      <h1>Enter Your detials</h1>
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
          placeholder="Enter your contact number"
        />
      </form>
      <button type="submit">Submit</button>
    </section>
  );
}

export default GeneralInfo;
