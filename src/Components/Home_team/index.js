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
import Person1 from "../../images/aditya.jpg";
import Person2 from "../../images/golu.jpg";
import Person3 from "../../images/divyanshi.jpg";
import Person4 from "../../images/divyanshi.jpg";


function HomeTeam() {
  const [phone,setPhone]= useState('');
  return (
    <div className="container">
      <div className="team">
        <div className="heading">
          <hr />
          <h1> A Team United by Shared Values </h1>{" "}
        </div>{" "}
        <div className="outer_team">
          <div className="number_outer">
            <p className="number"> 4 </p>{" "}
            <h1 className="number_tag"> Professional Designers in our team </h1>{" "}
          </div>{" "}
          <div className="image_outer">
            <div className="image_line1">
              <div className="team_img1">
              <img src={Person1} alt="Aditya Bhatnaker" className="team_img1_pic" />
              </div>{" "}
              <div className="team_img2"> 
              <img src={Person2} alt="Divyanshi Singh" className="team_img1_pic" /></div>{" "}
            </div>
            <div className="image_line2">
              <div className="team_img3">
              <img src={Person3} alt="Divyanshi Singh" className="team_img1_pic" /> </div>{" "}
              <div className="team_img4"> 
              <img src={Person4} alt="Divyanshi Singh" className="team_img1_pic" /></div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {/* <div className="process">
        <div className="heading">
          <hr />
          <h1>Our process to make you dream true</h1>
        </div>
        <Stepper/>
      </div> */}

      <Projects/>

      {/* <div className="home_testimonial">
        <Carousel/>
      </div> */}
      <div className="home_contact">
        <div className="home_contact_left">
          <div className="heading">
            <hr />
            <h1>Get free consultation.<br/> Just leave a request below</h1>
          </div>
          <div className="home_input">
            <InputComponent type="text" placeholder= "Your phone number" value={phone} 
            onChange={(e)=>{setPhone(e.target.value);}}/>
            <button className="btn" 
            
            onClick={()=>{
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
                }, (err)=>console.log(err))

              })
              .catch((err)=>{
                console.log(err);
              })
            }}
            >Callback</button>
          </div>
          
        </div>
        <img className="home_contact_img" src={Contact} alt="contact_img"/>
      </div>
      
    </div>
  );
}

export default HomeTeam;
