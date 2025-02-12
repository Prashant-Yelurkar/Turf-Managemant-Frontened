import MainLayout from '@/Components/Layout/MainLayout'
import Hero from '@/Components/Section/Hero'
import Pricing from '@/Components/Section/Pricing'
import Testimonials from '@/Components/Section/Testimonials'
import TurfDetails from '@/Components/Section/TurfDetails'
import ProductSlider from '@/Components/Sidebar/ProductSlider'
import React from 'react'

import img1 from '@/Assets/Images/image1.png'
import img2 from '@/Assets/Images/image2.png'
import img3 from '@/Assets/Images/image3.png'
import img4 from '@/Assets/Images/image4.png'
import img5 from '@/Assets/Images/image5.png'
import img6 from '@/Assets/Images/image6.png'
import img7 from '@/Assets/Images/image7.png'
import img8 from '@/Assets/Images/image8.png'
const index = () => {
  return (
    <MainLayout>
      <Hero />
      <TurfDetails />
      <ProductSlider data={[
        img1, img2, img3, img4, img5, img6, img7, img8
      ]} />
      <Testimonials />
      <Pricing />
    </MainLayout>
  )
}

export default index