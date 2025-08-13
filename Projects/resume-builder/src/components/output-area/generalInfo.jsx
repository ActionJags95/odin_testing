import "./generalInfo.css";
import contactIcon from "/src/assets/icons/phone.png";
import emailIcon from "/src/assets/icons/email.png";

function GeneralInfo(props) {
  const { name, email, contactNumber } = props.data;
  console.log(props);

  return (
    <section className="general-section">
      {name != "" && <h1 id="nameH1">{name}</h1>}
      {contactNumber != "" && (
        <div className="contact-place">
          <img src={contactIcon} alt="contact icons" />
          <p>{contactNumber}</p>
        </div>
      )}
      {email != "" && (
        <div className="email-place">
          <img src={emailIcon} alt="email icons" />
          <p>{email}</p>
        </div>
      )}
      {(name != "" || contactNumber != "" || email != "") && (
        <hr width="100%" color="black" size="5px" />
      )}
    </section>
  );
}

export default GeneralInfo;
