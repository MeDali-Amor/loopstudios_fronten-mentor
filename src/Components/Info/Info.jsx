import React from "react";
import "./Info.css";
import interactive from "../../images/desktop/image-interactive.jpg";

const Info = () => {
    return (
        <div className="info">
            <div className="image-container">
                <img src={interactive} alt="" />
            </div>
            <div className="text-info">
                <h1>The leader in interactive VR</h1>
                <p>
                    Founded in 2011, Loopstudios has been producing world-class
                    virtual reality projects for some of the best companies
                    around the globe. Our award-winning creations have
                    transformed businesses through digital experiences that bind
                    to their brand.
                </p>
            </div>
        </div>
    );
};

export default Info;
