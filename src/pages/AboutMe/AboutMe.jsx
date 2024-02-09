import { Expertise } from "../../components/Expertise/Expertise";
import { Skills } from "../../components/Skills/Skills";
import "./AboutMe.scss";

export const AboutMe = () => {
  const about = {
    label: "PROFILE",
    data: "In my 8 years of professional experience, I have honed my skills in developing robust and scalable web applications. My expertise lies in leveraging a variety of development tools and frameworks to deliver seamless user experiences. I have a keen eye for detail and a commitment to writing clean, efficient code that not only meets but exceeds client expectations. Adept at collaborating with cross-functional teams to drive project success. Proficient in developing Optimization tests to enhance User journeys and creating seamless digital experience.",
  };

  return (
    <>
      <section className="about">
        <div className="about_profile">
          <h3>{about.label}</h3>
          <p>{about.data}</p>
        </div>
        <div className="about_skills">
          <div className="about_skills_technical">
            <Skills />
          </div>
          <div className="about_skills_toolsAndFrameworks">
            <Expertise />
          </div>
        </div>
      </section>
    </>
  );
};
