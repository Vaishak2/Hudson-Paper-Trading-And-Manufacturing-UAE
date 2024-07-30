import React, { useEffect } from 'react'
import Banner from '../Banner/Banner'
import AboutUs from '../AboutUs/AboutUs'
import Gallery from '../Gallery/Gallery'
import Brands from '../Brands/Brands'
import CompanyContact from '../CompanyContact/CompanyContact'
import Contact from '../Contact/contact'
import HomeProducts from '../HomeProducts/HomeProducts'

function Home() {

  useEffect (()=> {
    window.scrollTo(0, 0);
},[])

  return (
    <div>
      <Banner/>
      <div className='px-4 sm:px-20'>
      <AboutUs/>
      <HomeProducts/>
      {/* <Brands/> */}
      <CompanyContact/>
      </div>
    </div>
  )
}

export default Home
