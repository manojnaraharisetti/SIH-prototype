import React from 'react'
import "./About.css"
import dodp from "./odopbg.png"
import red from "./R.jpeg"

export default function About() {
  return (
    <>
    <div className='districtdepthbgkou'>
       <section class="about-content ">
        <div class="left-column">
            <h1>About One District One Product</h1>
            <p>------------------------------------------------------------------------</p>
            <p>The "One District One Product" (ODOP) initiative in Jammu and Kashmir aims to promote and market the region's unique products, including traditional handicrafts, textiles, carpets, shawls, and more, made from locally sourced materials. It seeks to empower local artisans and entrepreneurs by providing a platform for showcasing their skills and products. The initiative focuses on fostering small and micro-enterprises, creating job opportunities, and modernizing production methods while preserving cultural heritage. Despite the diverse range of products, challenges remain in reaching wider markets and ensuring fair compensation for local producers and artisans.This innovative initiative recognizes that every district in the country has distinct capabilities and resources that can be harnessed for local economic empowerment.</p>
        </div>
        <div class="right-column">
            <img src={dodp} alt="Jammu and Kashmir State" />
        </div>
    </section>
    <section class="About-Vendors">
        <h2>Small Scale Workers</h2>
        <div class="line">
            <p>---------------------------------------</p>
    </div>
        <div class="left-column1 ">
            <div class="vimg">
            <img src={red} alt="Jammu and Kashmir State" /></div>
        </div>
        <div class="right-column1">
            <p>Small-scale vendors in Jammu and Kashmir embody the essence of local resilience and cultural heritage. Across various sectors, from the meticulous craftsmanship of traditional artisans producing world-renowned Pashmina shawls to the dedicated small-scale farmers cultivating saffron and apples, these entrepreneurs form an integral part of the region's economic tapestry. They infuse life into bustling marketplaces and provide a taste of Jammu and Kashmir's rich culinary traditions to tourists. Despite grappling with challenges like limited market access, these enterprising individuals are the torchbearers of tradition and the driving force behind economic growth in the state. Their unwavering commitment to preserving local culture, coupled with their entrepreneurial spirit, makes them invaluable contributors to the region's prosperity. </p>
        </div>
       
    </section>
    </div>
    </>
  )
}
