import React, { useState } from "react";
import "./contact.css";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Add";
import firebase from "../../Utils/firebase";
import emailjs from "emailjs-com";
import { containerVariant, emailConfig } from "../../Utils/config";
import SendIcon from "@material-ui/icons/Send";
import Snackbar from "@material-ui/core/Snackbar";
import { checkEmpty, phoneValidator } from "../../Utils/validator";
import {
  VALIDATION_ERROR,
  CONTACT_SUCCESS_MESSAGE,
} from "../../Components/Home_team/constant";
import { motion } from "framer-motion";

function Contact() {
  // this.state = {snackbaropen: false, snackbarmsg:'Your information is saved. We will contact you shortly.'};
  const [userName, setUserName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [requirements, setRequirements] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState("");
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === " clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <motion.div
      className="main-wrapper footer-space"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="first">
        <div className="chapter">
          <h1 className="chapter1">Contact</h1>

          <h3 className="chapter2">We are delighted to hear from you</h3>
          <p>
            We, at GreenServ Interiors, are committed to provide you with all
            the assistance you need in making your dream home a reality. For any
            querries or making your beautiful home come true, ping us. We are
            patiently waiting for you.
          </p>
        </div>
        <div className="chapter_holder">
          <div className="chapter_img2"></div>
        </div>
      </div>

      <div className="extra"></div>
      <div className="extra"></div>
      <div className="extra"></div>
      <div className="contact">
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
        <div className="card">
          <div className="info">
            <p className="Contact_topic">Contacts</p>

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
                    <p className="light_content">Mon-Sun:</p>
                  </div>
                  <div className="dark">
                    <p className="dark_content">24 X 7</p>
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
              </div>
            </div>
          </div>
          <div className="form">
            <div className="form_topic">
              <p className="form_topic_p">Please fill the required fields</p>
            </div>

            <div className="form_body">
              <div className="form_body_1">
                <div className="form_body_1_name">
                  <div className="name_light">Name</div>
                  <div className="name_area">
                    <input
                      type="text"
                      className="form_control"
                      value={userName}
                      onChange={(event) => {
                        setUserName(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="form_body_1_city">
                  <div className="name_light">Which city are you from?</div>
                  <div className="name_area">
                    <input
                      type="text"
                      className="form_control"
                      value={city}
                      onChange={(event) => {
                        setCity(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="form_body_1">
                <div className="form_body_1_name">
                  <div className="name_light">E-mail</div>
                  <div className="name_area">
                    <input
                      type="email"
                      className="form_control"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="form_body_1_city">
                  <div className="name_light">Phone Number</div>
                  <div className="name_area">
                    <input
                      type="text"
                      className="form_control"
                      value={phone}
                      onChange={(event) => {
                        setPhone(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="form_body_1">
                <div className="form_body_1_name">
                  <div className="name_light">Property location</div>
                  <div className="name_area">
                    <input
                      type="text"
                      className="form_control"
                      value={location}
                      onChange={(event) => {
                        setLocation(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="form_body_1_city">
                  <div className="name_light">Property size</div>
                  <div className="name_area">
                    <input
                      type="text"
                      className="form_control"
                      value={propertySize}
                      onChange={(event) => {
                        setPropertySize(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="form_body_1">
                <div className="form_body_1_name">
                  <div className="name_light">Requirements</div>
                  <div className="name_area">
                    <input
                      type="text"
                      className="requirement"
                      value={requirements}
                      onChange={(event) => {
                        setRequirements(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="form_body_1">
                <div className="form_body_1_name">
                  <div className="name_light">Any additional message?</div>
                  <div className="name_area">
                    <input
                      type="text"
                      className="requirement"
                      value={message}
                      onChange={(event) => {
                        setMessage(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="floating">
                <Fab
                  className="floating_btn"
                  size="large"
                  aria-label="send"
                  onClick={() => {
                    if (
                      checkEmpty(userName) &&
                      checkEmpty(city) &&
                      phoneValidator(phone)
                    ) {
                      const db = firebase.firestore();
                      db.collection("users")
                        .add({
                          userName,
                          message,
                          location,
                          email,
                          city,
                          phone,
                          propertySize,
                          requirements,
                        })
                        .then((doc) => {
                          emailjs
                            .send(
                              emailConfig.serviceId,
                              emailConfig.templateId,
                              {
                                from_name: userName,
                                to_name: "GreenServ",
                                requirements,
                                location,
                                phone,
                                message,
                                email,
                              },
                              emailConfig.userId
                            )
                            .then(
                              (result) => {
                                setUserName("");
                                setCity("");
                                setEmail("");
                                setLocation("");
                                setMessage("");
                                setPropertySize("");
                                setRequirements("");
                                setPhone("");
                              },
                              (err) => console.log(err)
                            );
                        })
                        .then(() => {
                          setAlert(CONTACT_SUCCESS_MESSAGE);
                          setOpen(true);
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    } else {
                      setAlert(VALIDATION_ERROR);
                      setOpen(true);
                    }
                  }}
                >
                  <SendIcon />
                </Fab>

                <Snackbar
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  open={open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                  message={alert}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
