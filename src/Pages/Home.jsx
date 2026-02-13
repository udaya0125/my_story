import React from 'react'
import Navigation from '../Components/Navigation'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'
import MyStory from '../Components/MyStory'

const Home = () => {
  return (
    <div>
      <Navigation/>
      <Hero/>
      <AboutUs/>
      <MyStory/>
      <Footer/>
    </div>
  )
}

export default Home
