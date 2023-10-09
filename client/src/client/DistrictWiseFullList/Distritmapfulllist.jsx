import { React, useState, useParams } from "react";
import "./../DistrictWiseFullList/DistrictIndepth.css";
import { useLocation } from "react-router-dom";
import DistrictProductsDataIndetail from "./DistrictProductsDataIndetail";

export default function Distritmapfulllist() {
  // const {selectedDistrict} = useCustomContext();
  const location = useLocation();
  const districtName = location.state;
  console.log(districtName);

  const selectedDistrictData = DistrictProductsDataIndetail.find(
    (district) => district.district === districtName
  );

  // console.log(selectedDistrictData.id)
  if (!selectedDistrictData) {
    return <div>District not found</div>; // Handle the case where the district is not found
  }
  return (
    <>
      {/* <h1>{selectedDistrictData.id}</h1> */}
      <div className="productdetail-container">
        <div className="top-image">
          <img src={selectedDistrictData.topcoverimage} alt=""></img>
        </div>
        <div className="container-fluid districtdepthbgkou">
          <div className="row">
            <div className="col-md-3">
              <div className="section section-1">
                <div className="section-image">
                  <img src={selectedDistrictData.sec1img} alt=""></img>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="section section-2">
                <div className="row">
                  <div className="col-md-9 producttext">
                    <h2>{selectedDistrictData.product} Insights</h2>
                    <p>{selectedDistrictData.productdesc}</p>
                  </div>
                  <div className="col-md-3 section3cont">
                    <img
                      src={selectedDistrictData.sec2img}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div style={{ clear: "both" }}></div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src={selectedDistrictData.img1}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      src={selectedDistrictData.img2}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      src={selectedDistrictData.img3}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-md-9 districttext">
                  <h2>{selectedDistrictData.district} Overview</h2>
                  <p>{selectedDistrictData.districtdesc}</p>
                </div>
                <div className="col-md-3 iframemap">
                  <iframe
                    title="Doda District Map"
                    width="100%"
                    height="300"
                    src={selectedDistrictData.map}
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <hr />

              <div className="small-card-container row">
                {/* Card 1 */}
                <div className="small-card col-md-2 col-12">
                  <div className="icon">
                    {/* <img src="icon1.png" alt="Card 1" /> */}
                    <i class="fa-solid fa-scale-balanced"></i>
                  </div>
                  <div className="content">
                    <h3 className="name">Tehsils</h3>
                    <center>
                      <p className="count">{selectedDistrictData.tehsils}</p>
                    </center>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="small-card col-md-2 col-12">
                  <div className="icon">
                    <i class="fa-solid fa-cubes-stacked"></i>
                  </div>
                  <div className="content">
                    <h3 className="name">Blocks</h3>
                    <center>
                      <p className="count">{selectedDistrictData.Blocks}</p>
                    </center>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="small-card col-md-2 col-12">
                  <div className="icon">
                    <i class="fa-solid fa-city"></i>
                  </div>
                  <div className="content">
                    <h3 className="name">Village</h3>
                    <center>
                      <p className="count">{selectedDistrictData.Villages}</p>
                    </center>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="small-card col-md-2 col-12">
                  <div className="icon">
                    <i class="fa-solid fa-industry"></i>
                  </div>
                  <div className="content">
                    <h3 className="name">Locals</h3>
                    <center>
                      <p className="count">
                        {selectedDistrictData.smallIndustries}
                      </p>
                    </center>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="small-card col-md-2 col-12">
                  <div className="icon">
                    <i class="fa-solid fa-building-circle-check"></i>
                  </div>
                  <div className="content">
                    <h3 className="name">Core Sectors</h3>
                    <center>
                      <p className="count">
                        {selectedDistrictData.MajorIndustries}
                      </p>
                    </center>
                  </div>
                </div>
              </div>
              <hr />

              <div class="sellercardcontainer">
                <h2>Vendors</h2>
                <ul class="cards">
                  <li class="card">
                    <div>
                      <div class="card-image">
                        <img
                          src="https://th.bing.com/th/id/R.bb369d8f9cb1c4d069df822766aa7bef?rik=LE9nlTbrAkmmjw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-oFWiia40irA%2fT1xtRq27A3I%2fAAAAAAAAAEk%2fFmezNzVt5q8%2fs1600%2fFasil%2bA.jpg&ehk=0vj5%2f7ApHujrIdLJQZ%2b4K53p7GvIcCQjUbSPwrDJUto%3d&risl=&pid=ImgRaw&r=0"
                          alt="Seller Image"
                        />
                      </div>
                      <div class="card-content">
                        <div class="contact-info">
                          <i class="fas fa-phone"></i>&nbsp;&nbsp;+91 9912399409
                        </div>
                        <div class="village-info">
                          <i class="fas fa-map-marker-alt"></i>
                          &nbsp;&nbsp;&nbsp;Dahad
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="card">
                    <div>
                      <div class="card-image">
                        <img
                          src="https://th.bing.com/th/id/R.bb369d8f9cb1c4d069df822766aa7bef?rik=LE9nlTbrAkmmjw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-oFWiia40irA%2fT1xtRq27A3I%2fAAAAAAAAAEk%2fFmezNzVt5q8%2fs1600%2fFasil%2bA.jpg&ehk=0vj5%2f7ApHujrIdLJQZ%2b4K53p7GvIcCQjUbSPwrDJUto%3d&risl=&pid=ImgRaw&r=0"
                          alt="Seller Image"
                        />
                      </div>
                      <div class="card-content">
                        <div class="contact-info">
                          <i class="fas fa-phone"></i>&nbsp;&nbsp;+91 7569363276
                        </div>
                        <div class="village-info">
                          <i class="fas fa-map-marker-alt"></i>
                          &nbsp;&nbsp;&nbsp;Dahad
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
