import React, {useState} from "react";
import Stepper from "../Stepper";
import "./Home_team.css";
import Contact from '../../images/contact.png';
import InputComponent from "../InputComponent";
import ScrollAnimation from "react-animate-on-scroll";
import Projects from "../Projects";
import Carousel from "../Carousel";
import firebase from '../../Utils/firebase';
import emailjs from 'emailjs-com';
import { emailConfig } from "../../Utils/config";
import HomeHistoryImage1 from '../../images/outer.jpg';
import Snackbar from "@material-ui/core/Snackbar";
import { phoneValidator } from "../../Utils/validator";
import { SUCCESS_MESSAGE, VALIDATION_ERROR } from "./constant";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Link } from "react-router-dom";



function HomeTeam() {
  const [phone,setPhone]= useState('');
  const [open, setOpen] = useState(false);
  const [alert, setAlert]= useState('');
  const handleClick =()=>{
    setOpen(true);
  }
  const handleClose= (event, reason) =>{
    if(reason === ' clickaway'){
      return
    }
    setOpen(false)
  }
  return (
    <div className="container">
      <div className="team">
        <div className="heading">
          <hr />
          <h1> Why we are Trustworthy? </h1>{" "}
        </div>{" "}
        <div className="outer_team">
        
          <div className="number_outer">
          <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
          <div className="projects_desc paragraph">
            <p className="number-p">
            Our cumulative experience is of around 39 years, however we started our journey in the year 2015 and never looked back. Since our inception, we have successfully completed more than 750+ projects and the numbers keep on increasing every month. At Greenserv, we promise you to not leave your place until we make it a dream come true for you. Let us solve the puzzle going on in your mind, call us for a free consultation.
            </p>
          </div>
        </ScrollAnimation>
        <div className="paragraph__read-more">
          <ArrowRightAltIcon className="arrow" />
          <Link to="/portfolio">View More</Link>
        </div>
            
          </div>{" "}
          <div className="image_outer">
          <img src={HomeHistoryImage1} className="img_outer" alt="study_image"/>
        </div>
      </div>
      </div>
      

      <Projects/>

      
      <div className="home_contact">
        <div className="home_contact_left">
          <div className="heading">
            <hr />
            <h1>Get free consultation.<br/> Just leave a request below</h1>
          </div>
          <div className="home_input">
            <InputComponent type="text" placeholder= "Your phone number" value={phone} 
            onChange={(e)=>{
              if(e.target.value.length<=10)
              setPhone(e.target.value);}}/>
            <button className="btn" 
            
            onClick={()=>{
              if(phoneValidator(phone)){
              const db=firebase.firestore();
              db.collection("users").add({
                phone,
              }).then((doc)=>{
                console.log(doc);
                emailjs.send(emailConfig.serviceId, emailConfig.templateId2,{
                  from_name: 'arbitrary user',
                  to_name: "GreenServ",
                  phone,

                }, emailConfig.userId).then((result)=>{
                  console.log(result.text);
                  setPhone('');
                  setAlert(SUCCESS_MESSAGE);
                  setOpen(true);
                }, 
                
                (err)=>console.log(err))

              })
              .catch((err)=>{
                console.log(err);
              })
            }
          else{
            setAlert(VALIDATION_ERROR);
            setOpen(true);
          }}}
            >Callback</button>
            <Snackbar anchorOrigin={{vertical:'bottom', horizontal:'center'}}
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              message={alert}
              
            /> 
          </div>
          
        </div>
        <img className="home_contact_img" src={Contact} alt="contact_img"/>
      </div>
      
    </div>
  );
}

export default HomeTeam;
