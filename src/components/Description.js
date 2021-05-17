import Paragraph from "./Paragraph";
import Button from "./Button";
import image from "./img/description-image.png";

function Description() {
    return (
        <section className="description">
        <div className="container">
            <div className="description__inner">
                <img src={image} alt="img" />
                <div className="description__text">
                    <Paragraph value="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <Paragraph value="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est laborum" 
                    />
                </div>
                <Button href="google.com" class="btn" value="Зв’яжіться з нами"/>
            </div>
        </div>
    </section>
     );
  }
  
  export default Description;
