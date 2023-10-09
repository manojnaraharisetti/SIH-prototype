import React, { useEffect } from "react";
import L from "leaflet"; // Make sure to include the Leaflet library
import "leaflet/dist/leaflet.css"; // Add Leaflet CSS
import { useNavigate } from "react-router-dom";
import "./Map.css"

// Define the coordinates of each district
const districts = [
  { id: 1, name: "Doda", lat: 33.1449, lng: 75.5472 },
  { id: 2, name: "Jammu", lat: 32.7266, lng: 74.857 },
  { id: 3, name: "Kauthua", lat: 32.3721, lng: 75.5122 },
  { id: 4, name: "Kishtwar", lat: 33.3152, lng: 75.7669 },
  { id: 5, name: "Poonch", lat: 33.7725, lng: 74.0882 },
  { id: 6, name: "Rajouri", lat: 33.3811, lng: 74.3142 },
  { id: 7, name: "Ramban", lat: 33.2451, lng: 75.1946 },
  { id: 8, name: "Reasi", lat: 33.0822, lng: 74.8357 },
  { id: 9, name: "Samba", lat: 32.5569, lng: 74.8664 },
  { id: 10, name: "Udhampur", lat: 32.9252, lng: 75.1375 },
  { id: 11, name: "Anantnag", lat: 33.7315, lng: 75.1443 },
  { id: 12, name: "Bandipora", lat: 34.47, lng: 74.5742 },
  { id: 13, name: "Baramulla", lat: 34.2095, lng: 74.3436 },
  { id: 14, name: "Budgam", lat: 34.2703, lng: 74.7726 },
  { id: 15, name: "Ganderbal", lat: 34.2703, lng: 74.7726 },
  { id: 16, name: "Kulgam", lat: 32.5569, lng: 74.8664 },
  { id: 17, name: "Kupwara", lat: 34.527, lng: 74.2615 },
  { id: 18, name: "Pulwama", lat: 33.8782, lng: 74.8928 },
  { id: 19, name: "Shopian", lat: 33.7144, lng: 74.7973 },
  { id: 20, name: "Srinagar", lat: 34.0837, lng: 74.7973 },
  { id: 21, name: "Kargil", lat: 34.5631, lng: 76.1347 },
  { id: 22, name: "Leh", lat: 34.1646, lng: 77.5848 },
];

function Map() {
  const navigate = useNavigate();
  useEffect(() => {
    const map = L.map("map").setView([33.7782, 76.5762], 7); // Adjust the center and zoom level as needed

    // Add OpenStreetMap as a base layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Define a function to handle marker click

    const customIcon = L.divIcon({
      className: "custom-marker-icon",
      html: '<i class="fa fa-map-marker fa-2x"></i>', // Replace with your desired Font Awesome icon and size
      iconSize: [32, 32], // Adjust the size as needed
      iconAnchor: [16, 32], // Adjust the anchor point if needed
    });

    // Add markers for each district
    districts.forEach((district) => {
      const marker = L.marker([district.lat, district.lng], {
        icon: customIcon,
      }).addTo(map);
      marker.bindPopup(district.name);

      marker.on("click", () => {
        //   console.log(district.name)
        const distname = district.name;
        navigate("/districtindepthmap", { state: distname });
      });
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="mapdisplay">
      <h1>Pin points of Kashmir</h1>
      <div
        id="map"
        className="mapstyling map-border"
        style={{ height: "500px", width: "90%", marginLeft:"80px"}}
      ></div>
      <div className="text-right">
        {/* Your text content on the right side */}
        <p>
        Jammu and Kashmir, now a union territory in northern India, is characterized by diverse geography,
         encompassing the Himalayas, Pir Panjal Range, and Shivalik Range. It shares borders with Pakistan 
         and China and features abundant rivers and lakes, including Dal Lake. The region experiences varying climates,
          from temperate in the Kashmir Valley to subtropical in Jammu and arid conditions in Ladakh. Rich biodiversity 
          is found here, with protected areas for wildlife conservation. The Line of Control (LoC) divides the territory
           between India and Pakistan, and it was reorganized into two union territories, Jammu & Kashmir and Ladakh, in 2019.
            The population of the former state was estimated at around 12.5 million, subject to change over time. 
            This reorganization followed the historic revocation of Article 370, leading to the alteration of its administrative
             and political status.
          </p>
      </div>
    </div>
  );
}

export default Map;
