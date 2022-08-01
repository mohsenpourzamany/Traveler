import React from 'react'
import Booking from '../Component/Booking'
import CarouselHome from '../Component/CarouselHome'
import Feature from '../Component/Feature'
import AboutUs from '../Component/AboutUs'
import Destination from '../Component/Destination'
import Packages from '../Component/Packages'
import Services from '../Component/Services'
import Registration from '../Component/Registration'
import TeamGuide from '../Component/TeamGuide'
import SayClients from '../Component/SayClients'
import Blog from '../Component/Blog'


const Home = () => {
  return (
    <div>
        <CarouselHome />
        <Booking />
        <AboutUs />
        <Feature />
        <Destination />
        <Services />
        <Packages />
        <Registration />
        <TeamGuide />
        <SayClients />
        <Blog />
       
    </div>
  )
}

export default Home