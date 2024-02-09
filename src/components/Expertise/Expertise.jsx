import images from "./images";
import { expertiseData } from "./expertise_data";
import "./Expertise.scss";

export const Expertise = () => {
  return (
    <section className="expertise">
      {expertiseData.map((item, i) => (
        <div key={i} className="expertise_content-wrapper">
          <h4 className="expertise_content-heading">{item.label}</h4>
          {item.data.map((tools, j) => (
            <div key={j} className="expertise_content-lists">
              {/* <p>{tools.label}</p> */}
              {tools.name.map((tool, k) => (
                <li key={k} className="expertise_content-listItem">
                  <img src={images[`${tool}Icon`]} alt={`${tool}Icon`} />
                  <span>{tool}</span>
                </li>
              ))}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
