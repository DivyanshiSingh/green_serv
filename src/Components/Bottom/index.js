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
                    <a href="#">
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
                        <p className="address_1">
                        Sales Queries +91 8373989676
                        </p>
                        <p className="address_1">
                        Execution Queries +91 8287313108
                        </p>
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
                    <div className="address">
                        <p className="address_1">
                        Furniture
                        </p>
                        <p className="address_1">
                        Lighting
                        </p>
                        <p className="address_1">
                        Interior Design
                        </p>
                        <p className="address_1">
                        Architecture design
                        </p>
                        <p className="address_1">
                        Commercial design
                        </p>
                     
                    </div>

                    



                </div>
            </div>
            <div className="bottom4">
                <div className="newsletter">
                    <p className="news">Useful Links</p>
                    <div className="newsletter_extra"></div>
                    <div className="address">
                        <p className="address_1">
                        Home
                        </p>
                        <p className="address_1">
                        About Us
                        </p>
                        <p className="address_1">
                        Services
                        </p>
                        <p className="address_1">
                        Portfolio
                        </p>
                        <p className="address_1">
                        Contact Us
                        </p>
                     
                    </div>
                   

                </div>
            </div>   
        </div>
        
        
        </div>
    )
}

export default Bottom;
