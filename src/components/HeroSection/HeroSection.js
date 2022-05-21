import classes from "./_heroSection.module.scss";
import classes2 from "./_composition.module.scss";
import btnClasses from "../Button/_button.module.scss";
import "../../base/_utilities.scss";
import "../../layout/_grid.scss";
import "../../base/_typography.scss";
import NorthinTechImg from "../../img/almuhandis.jpg";
import NorthinTvImg from "../../img/northinoTV.jpg";
import NorthinStoreImg from "../../img/northinoStore.jpg";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className={classes.section__about}>
      <div className="u-center-text u-margin-buttom-big">
        <h2 className="heading-primary--main">Northino</h2>
        <h4 className="heading-primary--sub">North Innovation</h4>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small ">
            Welcome to Northino
          </h3>
          <p className="paragraph">
            Welcome to Northino, the advanced Technology Company paving the way
            to the future. We are a team of like-minded and determined
            individuals, all sharing a vision for success. We believe that our
            sophisticated technology has the potential to become an industry
            sensation. Would you like to find out more? Explore our website
            today.
          </p>
          <h3
            className={
              "heading-tertiary u-margin-bottom-small " +
              classes.section__about__ourMission
            }
          >
            Our Mission
          </h3>
          <p className={"paragraph " + classes.section__about__ourMission}>
            Our company’s mission is to bring more innovations to humanity and
            also bring our community up to date on how the world of technology
            is expanding and how we can bring achievements to ourselves and our
            community using technology.
          </p>
          <Link to="/" className={btnClasses.btn__text}>
            Learn more &rarr;
          </Link>
        </div>
        <div className="col-1-of-2">
          <div className={classes2.composition}>
            <img
              src={NorthinTechImg}
              alt="Tech"
              className={
                classes2.composition__photo +
                " " +
                classes2.composition__photo__p1
              }
            />
            <img
              src={NorthinTvImg}
              alt="TV"
              className={
                classes2.composition__photo +
                " " +
                classes2.composition__photo__p2
              }
            />
            <img
              src={NorthinStoreImg}
              alt="Store"
              className={
                classes2.composition__photo +
                " " +
                classes2.composition__photo__p3
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
