import React from "react";
import "./handles.css";
import Fb from '@material-ui/icons/Facebook';
import Insta from '@material-ui/icons/Instagram';

function Handles(){
    return (
        <div className="exterior">
            <div className="icon1">
            <a href="https://www.instagram.com/p/CHUkVjEjk5e/?igshid=xucg687ifvhq">
                        <Insta color="secondary"
                        style={{ fontSize: 40 }}
                        >
                        
                        </Insta>
                        
                    </a>
            </div>
            <div className="icon2">
            <a href="https://www.facebook.com/GreenservInteriors">
                        <Fb 
                        color="primary"
                        style={{ fontSize: 40 }}
                        >
                            
                        </Fb>
                        
                    </a>
                
            </div>
            
                    

        </div>
    )
}
export default Handles;