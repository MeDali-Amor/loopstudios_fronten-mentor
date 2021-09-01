import React from "react";
import "./Grid.css";
import mobileData from "../../img-mobile-data";

const Grid = () => {
    return (
        <div className="grid-container-mobile">
            <h1>our creations</h1>
            <div className="grid-mobile">
                {mobileData.map((el) => {
                    const { id, image, title } = el;
                    return (
                        <div className="card-mobile" key={id}>
                            <img src={image} alt="" />
                            <h2 className="grid-el-title">{title}</h2>
                        </div>
                    );
                })}
            </div>
            <div className="btn-container">
                <button className="btn">SEE ALL</button>
            </div>
        </div>
    );
};

export default Grid;
