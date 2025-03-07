import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mailIcon from "../../assets/mail_icon.svg";
import locationIcon from "../../assets/location_icon.svg";
import callIcon from "../../assets/call_icon.svg";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "171fbcf7-9212-48fd-8e00-b34a8a5f8578");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1> <img src={theme_pattern} alt="" />{" "}
      </div>
      <div className="contact-section">
        <div className="left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="detail">
              <img src={mailIcon} alt="" />
              <p>mahnoorkhalid138@gmail.com</p>
            </div>
            <div className="detail">
              <img src={callIcon} alt="" />
              <p>03145524899</p>
            </div>
            <div className="detail">
              <img src={locationIcon} alt="" />
              <p>Rawalpindi, Pakistan</p>
            </div>
          </div>
        </div>

        <form className="right" onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button className="contact-submit" type="submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
