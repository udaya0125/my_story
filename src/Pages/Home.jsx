import React from 'react'
import Navigation from '../Components/Navigation'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'
import MyStory from '../Components/MyStory'
import Poem from '../Components/Poem'

const Home = () => {
  return (
    <div>
      <Navigation/>
      <Hero/>
      <AboutUs/>
      <MyStory/>
      <Poem/>
      <Footer/>
    </div>
  )
}

export default Home
