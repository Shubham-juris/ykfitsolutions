import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import WelcomeSection from './Components/WelcomSection/WelcomeSection'
import AboutUs from './Components/AboutUs/AboutUs'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'
import Sitemaintenance from './Components/Sitemaintenance/Sitemaintenance'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <WelcomeSection/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
      <Sitemaintenance/>
    </>
  )
}

export default App
