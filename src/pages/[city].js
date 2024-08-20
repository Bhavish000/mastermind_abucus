// import { useEffect, useState } from 'react';
import Head from 'next/head';
// import { useRouter } from 'next/router';
import Navbar from '../sectionPage/Student Landing page/Navbar';
// import FooterStyleTwo from '../components/Layout/Footer/FooterStyleTwo';
import FooterStyleTwo from '../component/layout/Footer/FooterStyleTwo';

import Hero from '../sectionPage/Student Landing page/Hero';
import Slider from '../sectionPage/Student Landing page/Slider';
import WhySmart from '../sectionPage/Student Landing page/WhySmart';
import ChildExpSec from '../sectionPage/Nearest-abacus-class/Child_exp_sec';
import UnleashSec from '../sectionPage/Nearest-abacus-class/Unleash_sec';

const NearestAbacusClass = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{data.m_title}</title>
        <meta name="keywords" content={data.m_keyword} />
        <meta name='description' content={data.m_description} />
        <meta property="og:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png" />
      </Head>
      <Navbar />
      <Hero />
      <UnleashSec H1={data.h1} h1dec={data.h1_description} H2={data.h2} h2dec={data.h2_description} />
      <WhySmart />
      <Slider Heading='Students In Action' />
      <ChildExpSec />
      <FooterStyleTwo footerTopClass='footer-top no-gap' />
    </>
  );
}


export async function getStaticPaths() {
    // Fetch list of cities from an API or define them statically
    const cities = ['london', 'abu-dhabi', 'calgary','canada','chicago','dubai','california','dublin','florida','houston','manchester-central','melbourne','milton-keynes','new-york','paris','phoenix','sharjah','south-harrow','texas','toronto']; // Example cities
    // const response = await fetch('https://your-api-url.com/api/cities');
    // const cities = await response.json();
  
    const paths = cities.map(city => ({
      params: { city:`abacus-classes-in-${city.toLowerCase().replace(/\s+/g, '-')}`},
    }));
  
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
    // Extract city name from the params
    const city = params.city.replace('abacus-classes-in-', '');
  
    try {
      const response = await fetch(`https://tt.mastermindschool.co.in/api/get_location_detail?location=${city}`);
      const result = await response.json();
  
      if (result.message === "Valid page") {
        return {
          props: {
            data: result.data,
          },
        //   revalidate: 60, // Revalidate data every 60 seconds
        };
      } else {
        return {
          notFound: true,
        };
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: {},
        // revalidate: 60, // Revalidate data every 60 seconds
      };
    }
  }
export default NearestAbacusClass;