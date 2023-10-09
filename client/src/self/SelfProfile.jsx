import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SelfProfile() {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    // Define the URL for your API endpoint
    const apiUrl = 'http://localhost:5000/data/getprofile';

    axios.get(apiUrl)
      .then((response) => {
        console.log(response.data.data[0])
        setProfileData(response.data.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures this effect runs once

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <div className="text-center">
            <img
              src={`http://localhost:5000/uploads/${profileData.admin_image}`}
              alt="Admin Profile"
              className="rounded-circle img-thumbnail"
              width="100"
            />
          </div>
          <h2 className="card-title text-center">Admin Profile</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Type: {profileData.admin_type}</li>
            <li className="list-group-item">Username: {profileData.admin_username}</li>
            <li className="list-group-item">Seller Name: {profileData.admin_sellername}</li>
            <li className="list-group-item">Seller Number: {profileData.admin_sellernumber}</li>
            <li className="list-group-item">Gender: {profileData.admin_gender}</li>
            <li className="list-group-item">Product Name: {profileData.admin_productname}</li>
            <li className="list-group-item">House Number: {profileData.admin_housenumber}</li>
            <li className="list-group-item">Street: {profileData.admin_street}</li>
            <li className="list-group-item">City: {profileData.admin_city}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
