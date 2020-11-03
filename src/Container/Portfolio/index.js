import React from 'react';
import './portfolio.css';

function index() {
    return (
        <div>
            <div className="first">
                <div className="chapter">
                    <p className="chapter1">
                        Portfolio
                    </p>
                   
                    <p className="chapter2">
                        Our work cases
                    </p>
                </div>
                <div className="chapter_img">
                    

                </div>
            </div>

            <div className="extra"></div>
            <div className="extra"></div>
            <div className="extra"></div>
            <div className="second">
            <div className="heading">
            <hr />
            <h1> See our best projects </h1>{" "}
            </div>{" "}
            <br></br>
            
            </div>

            {/* quote */}

            <div className="describe">
                <p className="description">
                Since our humble beginning in 2015, We have significantly expanded our collection of exclusive lamps. Today we are proud to present you our best lighting design solutions. Today we are proud to present you our best.
                </p>
            </div>
            {/* carousel */}

            <div className="extra"></div>
            
        </div>
    )
}

export default index
