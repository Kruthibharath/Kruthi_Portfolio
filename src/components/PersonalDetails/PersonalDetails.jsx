import "./PersonalDetails.scss";
import emailIcon from "../../assets/images/email-48.png";
import phoneIcon from "../../assets/images/phone-48.png";
import addressIcon from "../../assets/images/home-48.png";
export const PersonalDetails = () => {
  const PersonalInfo = {
    email: "kruthi.bharath@gmail.com",
    phone: "+44 7848389020",
    homeAddress: "Epsom, London",
  };
  const googleMapsLink = `https://www.google.com/maps/place/${encodeURIComponent(
    PersonalInfo.homeAddress
  )}`;
  return (
    <ul className="personalInfo">
      <li className="personalInfo_lists">
        {/* <strong>Email: </strong> */}
        <img src={emailIcon} alt="" />
        <a href={`mailto:${PersonalInfo.email}`}>{PersonalInfo.email}</a>
      </li>
      <li className="personalInfo_lists">
        <img src={phoneIcon} alt="" />
        <a href={`tel:${PersonalInfo.phone}`}>{PersonalInfo.phone}</a>
      </li>
      <li className="personalInfo_lists">
        <img src={addressIcon} alt="" />
        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
          {PersonalInfo.homeAddress}
        </a>
      </li>
    </ul>
  );
};
