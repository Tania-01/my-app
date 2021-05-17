
import FooterLogo from "./FooterLogo"
import Contacts from "./Contacts"
import FooterNavigator from "./FooterNavigator"
import SocialNetworks from "./SocialNetworks"

function Footer(props) {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <FooterLogo />
            <Contacts 
                location="с. Великі Гаї, вул. Об‘їзна 3а"
                phone="+380 ... ... ..."
                email="contact@youritsoft.com"
            />
            <FooterNavigator />
            <SocialNetworks />
          </div>
        </div>
      </footer>
    );
}

export default Footer;
