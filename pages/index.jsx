import React from 'react'
import AdBanner from '../components/AdBanner'
import Banner from '../components/Banner'
import BannerCarousel from '../components/BannerCarousel'
import InfoCard from '../components/InfoCard'
import MainHeader from '../components/MainHeader'
import NewsLetter from '../components/NewsLetter'
import Section from '../components/Section'
import Section2 from '../components/Section2'

function Homepage() {
  return (
    <div>
     <Banner />
     <MainHeader />
     <BannerCarousel />
     <Section />
     <Section2 />
     <AdBanner />
     <InfoCard />
     <NewsLetter />
    </div>
  )
}

export default Homepage