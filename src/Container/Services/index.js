import React from 'react';
import './services.css';
import Bottom from '../../Components/Bottom';
import { motion } from "framer-motion";


function Services() {
    return (
        <motion.div 
    exit={{opacity:0}} 
    animate={{opacity: 1}}
    exit={{opacity:0}}
     >
        <div>
            
            <div className="first">
                <div className="chapter">
                    <p className="chapter1">
                        Services
                    </p>
                   
                    <p className="chapter2">
                        Please review our services
                    </p>
                </div>
                <div className="chapter_img1">

                </div>
            </div>
            {/* second */}
            
            <div className="extra"></div>
            <div className="extra"></div>
            <div className="extra"></div>
            <div className="second">
            <div className="heading">
            <hr />
            <h1> We are ready to offer you following services </h1>{" "}
            </div>{" "}
            <br></br>
            <br></br>
            </div>

            {/* third divs containing services */}

            <div className="service1">
                <div className="service_img1">

                </div>
                <div className="service_para">
                    <p className="service_para_1">
                        Interior design
                    </p>
                    <p className="service_para_2">
                    Today, every home is not Vastu compliant. Hence , we do the designing inspired by Vastu Shastra and helps our Clients in getting maximum benefits from each direction. We at Greenserv, assures our customer about the raw material used in the whole process and best quality.
                    </p>
                </div>
            </div>
            <div className="extra_small"></div>
            <div className="service1">
                <div className="service_img2">

                </div>
                <div className="service_para">
                <p className="service_para_1">
                    Architectural development
                    </p>
                    <p className="service_para_2">
                    If we talk about today’s market condition, we can see that how people are getting fooled by local carpenters on the name of Interior Designing. Being novice, they easily come into their trap and ended up loosing their money for very low quality works. We at Greenserv, assures our customer about the raw material used in the whole process and best quality.
                    </p>
                    
                </div>
            </div>
            <div className="extra_small"></div>
            <div className="service1">
                <div className="service_img3">

                </div>
                <div className="service_para">
                <p className="service_para_1">
                        Kitchen interiors
                    </p>
                    <p className="service_para_2">
                    Our mission is to help every home buyer to provide all the Interior related services under one roof and that is why we offer a range of services to help you achieve the results you’re after. We will not leave until we make your Dream Home and that is why we provide complete interior solutions under one roof.
                    </p>
                    
                </div>
            </div>
            <div className="extra_small"></div>
            <div className="service1">
                <div className="service_img4">

                </div>
                <div className="service_para">
                <p className="service_para_1">
                        Quality Woodwork
                    </p>
                    <p className="service_para_2">
                    If we talk about today’s market condition, we can see that how people are getting fooled by local carpenters on the name of Interior Designing. Being novice, they easily come into their trap and ended up loosing their money for very low quality works. We at Greenserv, assures our customer about the raw material used in the whole process and best quality. Our continuous efforts towards the technological enhancement enables us to achieve the elegant designs.
                    </p>
                    
                </div>
            </div>
            <div className="extra"></div>
        </div>
        </motion.div>
    )
}

export default Services
