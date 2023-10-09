import React from 'react';
import p from './static/Screenshot 2023-09-26 143524.png'
function Docs() {
  return (
    <center>
    <div>
      <h1>SMART INDIA HACKATHON-2023</h1>
      
      <h2>Team Name: HNC-007</h2>
      <h2>Theme: Heritage and Culture</h2>
      <h2>Problem Code: 1355</h2>
      <h2>Problem Title: One District One Product for Jammu and Kashmir</h2>

      {/* Abstract */}
      <h3>Abstract:</h3>
      <p>
          The "One District One Product" (ODOP) initiative in Jammu and Kashmir strives to showcase and uplift the region's unique products, ranging from traditional handicrafts to textiles, carpets, shawls, and more. While this initiative aims to empower local artisans and entrepreneurs by providing a platform to exhibit their creations, it faces several challenges...
      </p>

      {/* Table of Contents */}
      <h3>TABLE OF CONTENTS:</h3>
      <ul>
          <li>ABSTRACT</li>
          <li>INTRODUCTION</li>
          <li>PROBLEM STATEMENT</li>
          {/* Include other sections here */}
      </ul>

      {/* Introduction */}
      <h3>INTRODUCTION:</h3>
      <p>
          This Project is about the “One District One Product” initiative taken by the Government of Jammu And Kashmir to support the local vendors of the region. This project is all about supporting the local talent and culture by showcasing the beautiful and one-of-a-kind products created by artisans and entrepreneurs in the area...
      </p>

      {/* Problem Statement */}
      <h3>Problem Statement:</h3>
      <p>
          The "One District One Product" (ODOP) initiative in Jammu and Kashmir is dedicated to showcasing and supporting the region's distinctive products, such as traditional handicrafts, textiles, carpets, and shawls, crafted from locally sourced materials...
      </p>
       <img src={p} ></img>
      {/* Include other sections here */}
    </div>
    </center>
  );
}

export default Docs;
