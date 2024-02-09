import { skillsData } from "./skills_data";
import { Line } from "rc-progress";
import "./Skills.scss";
export const Skills = () => {
  return (
    <section className="skills">
      <div className="skills_content-wrapper">
        {skillsData.map((skills, i) => (
          <div key={i} className="skills_content-list">
            <h4 className="skills_content-heading">{skills.label}</h4>
            <div>
              {skills.data.map((skillItem, j) => (
                <div className="skills_progressbar-wrapper" key={j}>
                  <p>{skillItem.SkillName}</p>
                  <Line
                    percent={skillItem.percentage}
                    strokeWidth={2}
                    strokeColor="var(--primary)"
                    trailWidth={2}
                    strokeLinecap="square"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
