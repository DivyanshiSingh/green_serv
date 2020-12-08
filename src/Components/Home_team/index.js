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
import SnackBar from "@material-ui/core/SnackBar";
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
            We believe that every customer has a right to know “what is inside”. At Greenserv, we follow a transparent customer centric approach and informs the customer about the raw material used, Quantities, Pricing factors and various other things related the project. This has made us the synonym of Quality and Trust in the market and have helped us in achieving the highest customer satisfaction in the vicinity so far.
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
            <SnackBar anchorOrigin={{vertical:'bottom', horizontal:'center'}}
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
