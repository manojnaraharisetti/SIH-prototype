import React, { useState } from "react";
import axios from "axios";
import "./../admin/PanchayatAdd.css"

const SelfAdd = () => {
  const [file, setFile] = useState("");
  const [sellername, setSellername] = useState("");
  const [sellerNumber, setSellerNumber] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(""); // New state for the selected product
  const [houseNumber, setHouseNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedGender, setSelectedGender] = useState(""); // New state for selected gender
  const type="self"
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

  // Handle gender radio button change
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("photo", file);
    formData.append("sellername", sellername);
    formData.append("type", type);
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
    <>  <li><a href="selfhome">Home</a></li>
    <div className="container mt-5">
      <h2>Seller Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="sellerName" className="form-label">
            Seller Name
          </label>
          <input
            type="text"
            className="form-control"
            id="sellerName"
            placeholder="Enter Seller Name"
            required
            value={sellername}
            onChange={handleSellerNameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sellerName" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            id="sellerName"
            placeholder="Enter UserName"
            required
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sellerName" className="form-label">
           Password
          </label>
          <input
            type="password"
            className="form-control"
            id="sellerName"
            placeholder="Enter Seller Name"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sellerNumber" className="form-label">
            Seller Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="sellerNumber"
            placeholder="Enter Seller Number"
            required
            value={sellerNumber}
            onChange={handleSellerNumberChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Residence</label>
          <div className="row">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="House Number"
                required
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Street"
                required
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="sellerPhoto" className="form-label">
            Upload Seller Photo
          </label>
          <input
            type="file"
            className="form-control-file"
            id="sellerPhoto"
            accept="image/*"
            onChange={setImgFile}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <select
            className="form-select"
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
          <label className="form-label">Gender</label>
          <div className="form-check">
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
          <div className="form-check">
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
        <button type="submit" className="btn btn-primary">
          Add
        </button>
        
      </form>
    </div>
    </>
  );
};

export default SelfAdd;
