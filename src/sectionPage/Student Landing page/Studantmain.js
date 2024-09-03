import React from 'react'
import Hero from './Hero'
import Video from './Video'
import WhySmart from './WhySmart'
import Slider from './Slider'
import FAQ from './Faq'
import ScrollToTop from '@/component/Common/ScrollTop'

const Studantmain = ({Referrer}) => {
  return (
    <React.Fragment>
        {/* hero section */}
        <Hero Referrer={Referrer}/>
        {/* video section */}
        <Video/>
        {/* why smart section */}
        <WhySmart/>
        {/* slider section */}
        <Slider/>
        {/* FAQ section */}
        <FAQ/>

        <ScrollToTop status={'bookclass'}  Referrer={Referrer}/>
    </React.Fragment>
  )
}

export default Studantmain