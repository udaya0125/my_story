import React from 'react'
import Navigation from '../Components/Navigation'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'
import MyStory from '../Components/MyStory'
import Poem from '../Components/Poem'
import ChooseUs from '../Components/ChooseUs'

const Home = () => {
  return (
    <div>
      {/* <Navigation/> */}
      <Hero/>
      <AboutUs/>
      <MyStory/>
      <ChooseUs/>
      <Poem/>
      <Footer/>
    </div>
  )
}

export default Home
