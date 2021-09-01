import React from "react";
import "./Grid.css";
import desktopData from "../../img-desktop-data";

const GridDesktop = () => {
    return (
        <div className="grid-container-desktop">
            <div className="grid-head">
                <h1>our creations</h1>
                <div className="btn-container">
                    <button className="btn">SEE ALL</button>
                </div>
            </div>
            <div className="grid-desktop">
                {desktopData.map((el) => {
                    const { id, image, title } = el;
                    return (
                        <div className="card-desktop" key={id}>
                            <img src={image} alt="" />
                            <h2 className="grid-el-title">{title}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GridDesktop;
