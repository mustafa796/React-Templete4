import React from "react";

import '../scss/main.scss'
import { Carousel } from 'antd';
import img from "../img/pic.jpg";
import img1 from "../img1/pic1.jpg";
import img3 from '../img3/img3.jpg';
import img4 from '../img4/img4.jpg';
import img5 from '../img5/img5.jpg';
import img6 from '../img6/img6.jpg';
const contentStyle = {
  height: '324px',
  width:'508px',
  color: '#000000',
  lineHeight: '160px',
  textAlign: 'right',
  background: '#364d79',
};
// import OwlCarousel from 'owl.carousel'
// import 'owl.carousel/dist/assets/owl.carousel.min.css'
// import 'owl.carousel/dist/assets/owl.theme.default.min.css'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';



export default function Section2() {
  
  return (
    <>
      <div className="section2">
        <div className="sec2-1">
          <h2>Award-winning web designs</h2>
          <p>
            Choose from an unrivaled set of best-in-class website templates.
            Customize the design to fit your personal style and professional
            needs.
          </p>
          {/* <a href="#" className="sec-a1">BROWSE TEMPLATES </a>
            <a href="#" className="sec-a2">LEARN MORE</a> */}
          <div className="link">
            <div>
            <a href="#" className="sec-a1" id="cool-link">
              
              BROWSE TEMPLATES <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            </div>
            <div>
            <a href="#" className="sec-a2" id="cool-link">
              LEARN MORE
            </a>
            </div>
          </div>
        </div>
      
          <div className="sec2-2">
            
          <Carousel >
   
   
   <div>
     <img src={img} style={contentStyle} alt="" />
   </div>
   <div>
     <img src={img1} style={contentStyle} alt="" />
   </div>
   <div>
     <img src={img3} style={contentStyle} alt="" />
   </div>
   <div>
     <img src={img4} style={contentStyle} alt="" />
   </div>
   <div>
     <img src={img5} style={contentStyle} alt="" />
   </div>
   <div>
     <img src={img6} style={contentStyle} alt="" />
   </div>
  </Carousel>

        


  
          </div>
         
        
        
        <div className="sec2-3">
          <div>
            <a href="#" className="sec2-a3" id="cool-link">BEAUMONT</a>
          </div>
          <div>
            <a href="#" className="sec2-a3" id="cool-link">MARC</a>
          </div>
        </div>


    
      </div>

     
    </>
  );
}
