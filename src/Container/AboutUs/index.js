import React from 'react';
import About_banner from '../../Components/About_banner/index';
import './about.css';


function About() {
    return (
        <div>
            <About_banner/>


            {/* INTRO */}


            <div className="extra"></div>
            
                <p className="team_intro_heading">
                    Designer services are 
                </p>
                <p className="team_intro_heading">
                    no longer a luxury 
                </p>
            
            <div className="extra"></div>
            <div className="team_intro1">
                <div className="member1_img">

                </div>
                <div className="extra_between"></div>
                <div className="member1_intro">
                    <p className="p1">Chief Technical Officer</p>
                    <br></br>
                    <p className="name">Divyanshi Singh</p>
                    <br></br>
                    <p className="introduction">Every Home has its own story and so the designing also differs. Our experienced designing team takes down your exact requirement and challenges in your existing setup. Basis that, we provide you with the best suitable designs.</p>

                </div>
            </div>
            <div className="extra"></div>
            <div className="team_intro2">
                <div className="member2_intro">
                    <p className="p1">Chief Designer </p>
                    <br></br>
                    <p className="name">Archit Rathi</p>
                    <br></br>
                    <p className="introduction">Every Home has its own story and so the designing also differs. Our experienced designing team takes down your exact requirement and challenges in your existing setup. Basis that, we provide you with the best suitable designs.</p>


                </div>
                <div className="extra_between"></div>
                <div className="member2_img">
                    
                </div>
            </div>
            <div className="extra"></div>
            <div className="team_intro3">
                <div className="member3_img">

                </div>
                <div className="extra_between"></div>
                <div className="member3_intro">
                    <p className="p1">Chief Technical Officer</p>
                    <br></br>
                    <p className="name">Divyanshi Singh</p>
                    <br></br>
                    <p className="introduction">Every Home has its own story and so the designing also differs. Our experienced designing team takes down your exact requirement and challenges in your existing setup. Basis that, we provide you with the best suitable designs.</p>
                    
                </div>
            </div>
            <div className="extra"></div>
            <div className="team_intro4">
                <div className="member4_intro">
                    <p className="p1">Chief Technical Officer</p>
                    <br></br>
                    <p className="name">Divyanshi Singh</p>
                    <br></br>
                    <p className="introduction">Every Home has its own story and so the designing also differs. Our experienced designing team takes down your exact requirement and challenges in your existing setup. Basis that, we provide you with the best suitable designs.</p>

                </div>
                <div className="extra_between"></div>
                <div className="member4_img">
                    
                </div>
            </div>
            <div className="extra"></div>

             {/* banner */}

            <div className="banner2">
                <div className="durability">
                    <p className="banner2_1">Durability</p>
                    <p className="banner2_2">Exclusive 10 year durable</p>
                </div>
                <div className="modern">
                    <p className="banner2_1">Modern interior</p>
                    <p className="banner2_2">Exclusive 10 year warranty</p>
                </div>
                <div className="professional">
                    <p className="banner2_1">Professional team</p>
                    <p className="banner2_2">Many awards in the interior design</p>
                </div>
            
            </div>

            {/* quote */}
            <div className="extra_small"></div>
            <div className="quote">
                <p className="p_quote">
                “ We design your dreams and paint your imagination.
                </p>
                <p className="p_quote">
                We decorate your living and embelish your relations.”
                </p>
                
            </div>

            {/* bottom contact */}
            <div className="extra_small"></div>
            <div className="bottom">

            </div>



        </div>
    )
}

export default About;
