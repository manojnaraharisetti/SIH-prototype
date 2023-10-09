import React, { useState } from "react";
import axios from "axios";
import './PanchayatAdd.css';
import { useNavigate } from "react-router-dom";

const PanchyatAdd = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [sellername, setSellername] = useState("");
  const [sellerNumber, setSellerNumber] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(""); // New state for the selected product
  const [houseNumber, setHouseNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
   const [selectedGender, setSelectedGender] = useState(""); // New state for selected gender
 const type="admin"
  const handleSellerNameChange = (event) => {
    setSellername(event.target.value);
  };

  const setImgFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSellerNumberChange = (event) => {
    setSellerNumber(event.target.value);
  };

  // Handle product dropdown change
  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };


  // Handle gender radio button change
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("photo", file);
    formData.append("type", type);
    formData.append("sellername", sellername);
    formData.append("sellerNumber", sellerNumber);
    formData.append("productName", selectedProduct); // Use selected product
    formData.append("houseNumber", houseNumber);
    formData.append("street", street);
    formData.append("city", city);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("gender", selectedGender); // Add gender to the form data

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/data/add",
        formData,
        config
      );

      if (res.data.status === 201) {
        console.log("success");
        navigate("/panchayathome")

      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  // List of product options for the dropdown
  const productOptions = [
    "Lavender",
    "Pashimna Shawls",
    "Basohli Paintings",
    "Saffron",
    "Apples",
    "Chikri Wood Craft",
    "Red-Beans",
    "Lithium",
    "Calico Painting",
    "Kalari or Kaladi",
    "Walnuts",
    "Black Cumin",
    "Paper mache",
    "Cricket Willow Bats",
    "Dried-Mushroom",
    "Almond",
    "Honey",
    "Basmathi Rice",
    "Saffron",
    "Kashmiri Hand-Knotted Carpets",
    "Pashima Shawls",
    "Thangka Paintings",
  ];

  return (
    <>  <li><a href="panchayathome">Home</a></li>
    <div className="container mt-5">
     
      <div className="panchayatadd_container container">
      <h2>Seller Information</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="sellerName" className="panchayatadd_label form-label">
           Username
          </label>
          <input
            type="text"
            className="panchayatadd_input form-control"
            id="sellerName"
            placeholder="Enter Username"
            required
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sellerName" className="panchayatadd_label form-label">
            Seller Name
          </label>
          <input
            type="password"
            className="panchayatadd_input form-control"
            id="sellerName"
            placeholder="Password"
            required
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sellerName" className="panchayatadd_label form-label">
            Seller Name
          </label>
          <input
            type="text"
            className="panchayatadd_input form-control"
            id="sellerName"
            placeholder="Enter Seller Name"
            required
            value={sellername}
            onChange={handleSellerNameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sellerNumber" className="panchayatadd_label form-label">
            Seller Number
          </label>
          <input
            type="tel"
            className="panchayatadd_input form-control"
            id="sellerNumber"
            placeholder="Enter Seller Number"
            required
            value={sellerNumber}
            onChange={handleSellerNumberChange}
          />
        </div>
        <div className="mb-3">
          <label className="panchayatadd_label form-label">Residence</label>
          <div className="row">
            <div className="col-md-4">
              <input
                type="text"
                className="panchayatadd_input form-control"
                placeholder="House Number"
                required
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="panchayatadd_input form-control"
                placeholder="Street"
                required
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="panchayatadd_input form-control"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="sellerPhoto" className="panchayatadd_label form-label">
            Upload Seller Photo
          </label>
          <input
            type="file"
            className="panchayatadd_file form-control-file"
            id="sellerPhoto"
            accept="image/*"
            onChange={setImgFile}
            required
          />
        </div>
        <div className="mb-3">
          <label className="panchayatadd_label form-label">Product Name</label>
          <select
            className="panchayatadd_select form-select"
            value={selectedProduct}
            onChange={handleProductChange}
            required
          >
            <option value="">Select a product</option>
            {productOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="panchayatadd_label form-label">Gender</label>
          <div className="panchayatadd_radio form-check">
            <input
              type="radio"
              className="form-check-input"
              id="male"
              value="Male"
              checked={selectedGender === "Male"}
              onChange={handleGenderChange}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="panchayatadd_radio form-check">
            <input
              type="radio"
              className="form-check-input"
              id="female"
              value="Female"
              checked={selectedGender === "Female"}
              onChange={handleGenderChange}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        <button type="submit" className="panchayatadd_submit btn btn-primary">
          Add
        </button>
        
      </form>
      </div>
    </div>
    </>
  );
};

export default PanchyatAdd;
