import React from "react";
import "antd/dist/antd.css";
import { Button} from "antd";
export default function Section1() {


  return (
    <>
      <div className="section1">
        <div className="sec1-left">
          <h6>CREATE YOUR WEBSITE</h6>

          <h1>The leader in</h1>
          <h1>website design.</h1>
          <p>
            Stand out online with a professional website, online store, or
            portfolio. With Squarespace, you can turn any idea into a reality.
          </p>

          <Button className="sec1-btn">GET STARTED</Button>
        </div>
        <div className="sec1-right">
          
            <img className = "vert-move"
              src="https://media-www.sqspcdn.com/images/pages/tour/overview-websites/hero/website-full-desktop-lg.jpg"
              alt=""
            />
          
        </div>
      </div>
   
    </>
  );
}

