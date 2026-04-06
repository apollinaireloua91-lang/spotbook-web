'use client'

import HeroSection from '@/components/landing/HeroSection'
import SocialProofBar from '@/components/landing/SocialProofBar'
import HowItWorks from '@/components/landing/HowItWorks'
import FeatureGrid from '@/components/landing/FeatureGrid'
import CategoriesRibbon from '@/components/landing/CategoriesRibbon'
import ForProfessionals from '@/components/landing/ForProfessionals'
import Testimonials from '@/components/landing/Testimonials'
import DownloadCTA from '@/components/landing/DownloadCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <HowItWorks />
      <FeatureGrid />
      <CategoriesRibbon />
      <ForProfessionals />
      <Testimonials />
      <DownloadCTA />
    </>
  )
}
