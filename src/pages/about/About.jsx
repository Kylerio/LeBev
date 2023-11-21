import React from 'react'

import Hero from '../../components/hero/Hero'
import AboutImage from '../../assets/img/osmar-do-canto-sSj0GHnkPkw-unsplash.jpg'

const About = () => {
  return (
    <div className='aboutpage'>
      
      
      <Hero
        cName="hero-about"
        heroImg={ AboutImage }
        title="About"
      />

      <div className='about mx-5 py-2 w-50'>
        <h1 className='fw-bold pt-5'>LeBev</h1>
        <p className='py-2'>LeBev is a beverages market providing the local beverages market with exotic and unique products. We offer a wide variety of drinks ranging from fizzy sodas to health concoctions to satisfy your beverage need for any occasion. With just a few clicks, quench your thirst with flavors from around the world.</p>
      </div>
      
      <div className='about mx-5 py-1 w-50'>
        <h1 className='fw-bold pt-5'>Vision</h1>
        <p className='py-2'>LeBev aims to provide the Indonesian beverages market easy access to novel drinks from around the globe.</p>
      </div>

      <div className='about mx-5 py-2 mb-5 w-50'>
        <h1 className='fw-bold pt-5'>Mission</h1>
        <ul>
          <li>Offer a wide array of beverages which are not commonly sold with a  relatively affordable price.</li>

          <li>Implement the most efficient and effective supply chain methods to ensure customers can enjoy their drinks as soon as possible.</li>

          <li>Employ cutting edge technology to provide a smooth experience for customers, from start to end.</li>
        </ul>
      </div>
      
    </div>
  )
}

export default About