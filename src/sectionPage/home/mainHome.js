import HomeBanner from '@/component/banner/homeBanner'
import React from 'react'
import RredLineSection from './redLineSection'
import About from './aboutSection'
import AboutSection02 from './AboutSection02'
import Courses from './CourseSection'
import Service from './ServiceSection'
import BenefiteSection from './BenefiteSection'
import OnlineClassSection from './OnlineClassSection'
import PracticeSection from './PracticeSection'
import GallerySection from './GallerySection'
import Testimonial from './TestimonialSection'
import FaqHome from './faq'
import Blog from './BlogSection'
import MapSection from './MapSection'
import NewsletterThree from '@/component/Newsletter/NewsletterThree'
import ScrollToTop from '@/component/Common/ScrollTop'
import ChatBox from '@/component/Common/ScrollTop/ChatBox'
// import dynamic from 'next/dynamic'
// const Blog = dynamic (() => import('./BlogSection'))
// import ScrollToTop from '@/component/ScrollTop'
// import ChatBox from '@/component/ScrollTop/ChatBox'

function MainHome({Referrer}) {
  return (
    <div>
      <HomeBanner Referrer={Referrer}/>
      <RredLineSection/>
      <About/>
      <AboutSection02/>
      <Courses/>
      <Service/>
      <BenefiteSection/>
      <OnlineClassSection Referrer={Referrer}/>
      <PracticeSection/>
      <GallerySection/>
      <Testimonial/>
      <FaqHome/>
      <Blog/>
      <MapSection/>
      <NewsletterThree/>
      <ChatBox/>
      <ScrollToTop Referrer={Referrer}/>
    </div>
  )
}

export default MainHome
