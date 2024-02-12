import "./Contact.scss";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
export const Contact = () => {
  const accessKey = import.meta.env.VITE_MY_PORTFOLI0_WEB3FORMS_ACCESS_KEY;
  return (
    <>
      <section className="contact">
        <h3>Get in touch</h3>
        <div className="contact_content">
          <p>I would love to hear from you.</p>
          <form
            action="https://api.web3forms.com/submit"
            method="post"
            className="contact_content_form"
          >
            <input type="hidden" name="access_key" value={accessKey} />
            <label className="contact_content_form_label">
              Name:
              <input
                type="text"
                placeholder="Full Name"
                name="user_name"
                className="contact_content_form_input"
                required
              />
            </label>
            <label>
              Email :
              <input
                type="eamil"
                placeholder="Email"
                name="user_email"
                className="contact_content_form_input"
                required
              />
            </label>
            {/* <label className="contact_content_form_label">
              Subject:
              <input
                type="text"
                className="contact_content_form_input"
                placeholder="Subject"
                name="subject"
                required
              />
            </label> */}
            <textarea
              name="message"
              className="contact_content_form_textarea"
            />
            <button className="contact_content_form_button" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="contact_socialMedia">
          <p>Let&apos;s connect on:</p>
          <SocialMedia />
        </div>
      </section>
    </>
  );
};
