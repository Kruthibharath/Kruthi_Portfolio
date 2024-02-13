import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "./experience_data";
import { MdWork } from "react-icons/md";
import "./Experience.scss";
export const Experience = () => {
  return (
    <>
      <section className="workExperience">
        <div className="timeline">
          <div className="timeline_experience">
            <h3 className="timeline_experience_header">
              Professional Experience
            </h3>
            <VerticalTimeline layout={"1-column"} lineColor="var(--primary)">
              {experienceData.experience.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline_experience_work"
                  contentStyle={{
                    background: "none",
                    border: "2px solid var(--primary)",
                    boxShadow: "2px 2px 0 var(--section-heading)",
                  }}
                  iconStyle={{ background: "var(--primary)", color: "#fff" }}
                  icon={<MdWork />}
                >
                  <div className="work_content">
                    <div className="work_content_header">
                      <h4>{item.title}</h4>
                      <h5>{item.date}</h5>
                    </div>
                    <h5>{item.Company}</h5>
                    <p className="work_content_description">
                      {item.description}
                    </p>
                    <ul className="work_content_tech">
                      {item.TechStack.map((tech, index) => (
                        <li key={index} className="work_content_tech_list">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </>
  );
};
