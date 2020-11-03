import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div>
      <div className="first">
        <div className="chapter">
          <p className="chapter1">Contact</p>

          <p className="chapter2">We are delighted to hear from you</p>
        </div>
        <div className="chapter_img"></div>
      </div>

      <div className="extra"></div>
      <div className="extra"></div>
      <div className="extra"></div>
      <div className="second">
        <div className="heading">
          <hr />
          <h1> Any questions or suggestion? </h1>{" "}
        </div>{" "}
      </div>
      <div className="sub_heading">
        <p className="contact_sub_heading">
          Write us a message and we will contact you!
        </p>
      </div>

      {/* card */}
      <div className="extra"></div>
      <div className="card">
        <div className="info">
          <p className="Contact_topic">Contacts</p>

          {/* <div className="extra"></div> */}
          <div className="info_1">
            <div className="info_icon1"></div>
            <div className="info_info_1">
              <p className="address1_info">2516 orchid, ska greenarch,</p>
              <p className="address1_info">
                greater noida (west), 201009, India
              </p>
            </div>
          </div>

          <div className="info_1">
            <div className="info_icon1"></div>
            <div className="info_info_1">
              <div className="section_1">
                <div className="light">
                  <p className="light_content">Mon-Sat:</p>
                </div>
                <div className="dark">
                  <p className="dark_content">9 am to 8 pm</p>
                </div>
              </div>
              <div className="section_1">
                <div className="light">
                  <p className="light_content">Sunday:</p>
                </div>
                <div className="dark">
                  <p className="dark_content">closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="info_1">
            <div className="info_icon1"></div>
            <div className="info_info_1">
              <p className="address1_info">greenserv.info@gmail.com</p>
            </div>
          </div>

          <div className="info_1">
            <div className="info_icon1"></div>
            <div className="info_info_1">
              <p className="address1_info">+91 8373989676</p>
              <p className="address1_info">+91 8287313108</p>
            </div>
          </div>
        </div>
        <div className="form">
          <div className="form_topic">
            <p className="form_topic_p">Please fill the required fields</p>
          </div>
        </div>
        {/* <div className="extra"></div> */}
      </div>
    </div>
  );
}

export default Contact;
