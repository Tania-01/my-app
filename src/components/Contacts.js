
import locationImage from "./img/location.png";
import phoneImage from "./img/phone.png";
import emailImage from "./img/email.png";

function Contacts(props) {
    return (
      <div className="footer__contacts">
        <div>
          <img src={locationImage} alt="location" />
          <a href="/">{props.location}</a>
        </div>
        <div>
          <img src={phoneImage} alt="phone" />
          <a href="tel:+380">{props.phone}</a>
        </div>
        <div>
          <img src={emailImage} alt="email" />
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </div>
      </div>
    );
}

export default Contacts;
