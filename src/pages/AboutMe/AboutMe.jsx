import { Expertise } from "../../components/Expertise/Expertise";
import { Skills } from "../../components/Skills/Skills";
import "./AboutMe.scss";

export const AboutMe = () => {
  const about = {
    label: "PROFILE",
    data: "In my 8 years of professional experience, I have honed my skills in developing robust and scalable web applications. My expertise lies in leveraging on a variety of development tools and frameworks to deliver seamless user experiences. I have a keen eye for detail and a commitment to writing clean, efficient and readable code. Proficient in developing Optimization A/B tests to enhance User journeys and digital experience. Adept at collaborating with cross-functional teams to drive project success.",
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
