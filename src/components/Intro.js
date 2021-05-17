import Title from "./Title";
import Paragraph from "./Paragraph";
import arrowImage from "./img/arrow.svg";
import rectangleImage from "./img/rectangle.svg";

function Intro() {
    return (
        <section className="intro">
            <div className="container">
                <div className="intro__inner">
                    <img src={rectangleImage} alt="rectangle"/>
                        <Title value="Дизайн ui / ux" class="intro__title" />
                        <Paragraph 
                        value="
                        Використовуючи дизайн-мислення та гармонійно поєднуючи дизайн та розробку,
                            ми перетворюємо важкі завдання в прості та зрозумілі рішення."
                        class="intro__additional"
                        />
                    <img src={arrowImage} alt="arrow"/>
                </div>
            </div>
        </section>
     );
  }
  
  export default Intro;
    