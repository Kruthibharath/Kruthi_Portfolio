import { SocialMediaData } from "./socialmedia_data";
import "./SocialMedia.scss";
export const SocialMedia = () => {
  return (
    <div className="socialmedia_container">
      {SocialMediaData.map((item) => (
        <a
          key={item.id}
          className="socialmedia_container_icons"
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          /*onClick={() => window.open("item.link", "_blank")}*/
        >
          <img alt={`${item.name}'s Icon`} src={item.imageUrl} />
        </a>
      ))}
    </div>
  );
};
