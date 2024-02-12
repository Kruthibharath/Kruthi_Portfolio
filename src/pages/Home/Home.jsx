import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
import { PersonalDetails } from "../../components/PersonalDetails/PersonalDetails";
import heroImage from "../../assets/images/kruthi2.jpg";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import Kruthi_Bharath_Resume from "../../assets/Kruthi_Resume.pdf";

export const Home = () => {
  const navigate = useNavigate();
  const handleNavigateToContact = () => navigate("/Contact");
  //const handleDownloadCV = () => {};
  return (
    <>
      <section className="hero">
        <div className="hero_text-wrapper">
          <h1>Kruthi Bharath</h1>
          <h2>Front End Web Developer</h2>
          <p>
            Passionnate Front End Web Developer skilled in creating neat and
            efficient user interfaces. Professional experience in developing
            interactive, cross-browser, cross-device compatible web
            applications.
          </p>
          <PersonalDetails />
          <SocialMedia />
        </div>
        <div className="hero_image-wrapper">
          <img
            className="hero_image"
            alt="Image of Kruthi Bharath"
            src={heroImage}
          />
        </div>
      </section>
      <div className="hero_connect_wrapper">
        <a href={Kruthi_Bharath_Resume} download={Kruthi_Bharath_Resume}>
          {/* <a href="Kruthi_Resume.pdf" download="Kruthi_Bharath_Resume.pdf"> */}
          <button> Download CV </button>
        </a>
        <button onClick={handleNavigateToContact}>Contact Me</button>
      </div>
    </>
  );
};
