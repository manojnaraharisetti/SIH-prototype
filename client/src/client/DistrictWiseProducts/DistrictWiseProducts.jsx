import { React, useState } from "react";
import "./DistrictWiseProducts.css";
// import { useCustomContext  } from "../../Context/Context";
import DistrictProductsData from "./DistrictProductdata";
import { useNavigate } from "react-router-dom"; // Import your JSON data

export default function DistrictWiseProducts() {
  // const [selectedD, setSelectedDistrict] = useState(0);
  const navigate = useNavigate();
  // const { renderid , selectedDistrict} = useCustomContext();
  // const handle = () => {
  //   // console.log(selectedD);
  //   renderid(selectedD);
  // };

  const handleCardClick = async (districtId, dist) => {
    navigate("/districtindepth", { state: { districtId, dist } });
  };
  return (
    <div>
      <div className="dop_container">
        <h1 className="dop_heading">District Wise Products</h1>
        <div className="container">
          <div className="dop_row row">
            {DistrictProductsData.map((product) => (
              <div className="col-md-3 col-sm-6" key={product.id}>
                <div
                  className="card dop_product-card"
                  onClick={() => {
                    handleCardClick(product.id,product.product);
                  }}
                >
                  <img
                    src={product.img}
                    className="card-img-top"
                    alt={`Product ${product.id}`}
                  />
                  <div className="dop_card-title">
                    <h5 className="dop_h5">{product.district}</h5>
                  </div>
                  <div className="dop_card-text">
                    <p>{product.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
