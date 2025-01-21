import MainLayout from '@/Components/Layout/MainLayout'
import Hero from '@/Components/Section/Hero'
import Pricing from '@/Components/Section/Pricing'
import Testimonials from '@/Components/Section/Testimonials'
import TurfDetails from '@/Components/Section/TurfDetails'
import React from 'react'

const index = () => {
  return (
    <MainLayout>
      <Hero />
      <TurfDetails />
      <Testimonials />
      <Pricing />
    </MainLayout>
  )
}

export default index