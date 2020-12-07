import React from 'react';
import Fb from '@material-ui/icons/Facebook';
import Insta from '@material-ui/icons/Instagram';
import './bottom.css';

function Bottom() {
    return (
        <div className="bottom_out">
            {/* upper box */}
        <div className="bottom">
            <div className="bottom1">
                <div className="newsletter heading">
                    <p className="news">News Letter</p>
                </div>
                <div className="Email">
                <input className="myText" type="email" placeholder="Your email" />
                </div>
                
                <div className="email_line">
                    <p className="Email_line">
                        * Sign up to receive special offers
                    </p>
                </div>
                <div className="handles">
                    <a href="#">
                        <Insta className="insta" />
                    </a>
                    <a gref="#">
                        <Fb className="fb"/>
                    </a>
                </div>

            </div>
            <div className="bottom2">
                <div className="newsletter">
                    <p className="news">Contact Us</p>
                    <div className="newsletter_extra"></div>
                    <div className="address">
                        <p className="address_1">
                        2516 orchid, ska greenarch,
                        </p>
                        <p className="address_1">
                        greater noida (west), 201009, India
                        </p>
                     
                    </div>
                    <div className="newsletter_extra"></div>
                    <div className="address">
                        <p className="address_1">
                        +91 8373989676
                        </p>
                        <p className="address_1">
                        +91 8287313108
                        </p>
                     
                    </div>
                    <div className="newsletter_extra"></div>
                    <div className="address">
                        <p className="address_1">
                        greenserv.info@gmail.com
                        </p>
                        
                     
                    </div>
                </div>
            </div>
            <div className="bottom3">
                <div className="newsletter">
                    <p className="news">Services</p>
                    <div className="newsletter_extra"></div>
                    <p className="bottom_3_items">Decor</p>
                    <div className="email_extra"></div>
                    <p className="bottom_3_items">Furniture</p>
                    <div className="email_extra"></div>
                    <p className="bottom_3_items">Lighting</p>
                    <div className="email_extra"></div>
                    <p className="bottom_3_items">Interior design</p>
                    <div className="email_extra"></div>
                    <p className="bottom_3_items">Architecture design</p>
                    <div className="email_extra"></div>
                    <p className="bottom_3_items">Commercial design</p>



                </div>
            </div>
            <div className="bottom4">
                <div className="newsletter">
                    <p className="news">Usefull Links</p>
                    <div className="newsletter_extra"></div>
                    <p className="bottom_3_items">Home</p>
                    
                    <p className="bottom_3_items">About Us</p>
                    
                    <p className="bottom_3_items">Services</p>
                    
                    <p className="bottom_3_items">Portfolio</p>
                    
                    <p className="bottom_3_items">Contact Us</p>
                    
                    <p className="bottom_3_items">Blog</p>

                </div>
            </div>   
        </div>
        {/* <div className="hr_div"><hr className="hr_line"/>
        </div> */}

            {/* lower box */}
        {/* <div className="lower_box">
            <p className="greenServ">GreenServ Interiors</p>

        </div> */}
        
        </div>
    )
}

export default Bottom;
