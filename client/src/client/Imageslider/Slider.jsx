import React from "react";
import './Gallery.css'
export default function Slider() {
  return (
    <div className="image-slider-cont">
      <div className="gallery-container">
        <div className="gallery-wrapper">
          <img className="imageslider_img" src="https://www.clubmahindra.com/blog/media/section_images/srinagarho-16aca21d876724c.jpg" alt="" />
          <img className="imageslider_img" src="https://dzq5y8juqplmb.cloudfront.net/media/blogs/banners/Srinagar.jpg" alt="" />
          <img className="imageslider_img" src="https://wallpaperaccess.com/full/1547072.jpg" alt="" />
          {/* <img className="imageslider_img4" src="https://www.team-bhp.com/forum/attachments/travelogues/155449d1246938163-delhi-leh-delhi-3058kms-3-guys-9-days-best-part-we-did-bikes-p1040360.jpg" width="1400px" alt="" /> */}
        </div>
      </div>
    </div>
  );
}