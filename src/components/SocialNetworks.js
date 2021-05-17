
import instagramImage from "./img/instagram.svg";
import facebookImage from "./img/facebook.svg";
import linkedinImage from "./img/linkedin.svg";
import twitterImage from "./img/twitter.svg";

function SocialNetworks() {
    return (
      <div className="footer__social">
        <img src={instagramImage} alt="instagram" />
        <img src={facebookImage} alt="facebook" />
        <img src={linkedinImage} alt="linkedin" />
        <img src={twitterImage} alt="twitter" />
      </div>
    );
}

export default SocialNetworks;


