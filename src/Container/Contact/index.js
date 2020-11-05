import React from "react";
import "./contact.css";
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Add';


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
                    <div className="name_light">
                        Name
                    </div>
                    <div className="name_area">
                        <input type="text" className="form_control"/>
                    </div>
                  </div>
                  
                  <div className="form_body_1_city">
                  <div className="name_light">
                        From which city are you from?
                    </div>
                    <div className="name_area">
                        <input type="text" className="form_control" />
                    </div>

                  </div>
                
            
              </div>

              <div className="form_body_1">
                  <div className="form_body_1_name">
                    <div className="name_light">
                        E-mail
                    </div>
                    <div className="name_area">
                        <input type="text" className="form_control" />
                    </div>
                  </div>
                  
                  <div className="form_body_1_city">
                  <div className="name_light">
                        Phone Number
                    </div>
                    <div className="name_area">
                        <input type="text" className="form_control"/>
                    </div>

                  </div>
                
            
              </div>

              <div className="form_body_1">
                  <div className="form_body_1_name">
                    <div className="name_light">
                        Property location
                    </div>
                    <div className="name_area">
                        <input type="text" className="form_control"/>
                    </div>
                  </div>

                  <div className="form_body_1_city">
                  <div className="name_light">
                        Property size
                    </div>
                    <div className="name_area">
                        <input type="text" className="form_control"/>
                    </div>

                  </div>
                  
                
                
            
              </div>

              <div className="form_body_1">
                  <div className="form_body_1_name">
                    <div className="name_light">
                        Requirements
                    </div>
                    <div className="name_area">
                        <input type="text" className="requirement"/>
                    </div>
                  </div>
              </div>

              <div className="form_body_1">
                  <div className="form_body_1_name">
                    <div className="name_light">
                        Any additional message?
                    </div>
                    <div className="name_area">
                        <input type="text" className="requirement"/>
                    </div>
                  </div>
              </div>
              <div className="floating">
              <Fab size="large" aria-label="send" color="primary" >
              <NavigationIcon />
              </Fab>
              </div>
              
          </div>
          
        </div>
       
      </div>
    </div>
  );
}

export default Contact;
