'use client'

import HeroSection from '@/components/landing/HeroSection'
import TrustBar from '@/components/landing/TrustBar'
import HowItWorks from '@/components/landing/HowItWorks'
import FeatureGrid from '@/components/landing/FeatureGrid'
import CategoriesRibbon from '@/components/landing/CategoriesRibbon'
import RevenueCalculator from '@/components/landing/RevenueCalculator'
import ForProfessionals from '@/components/landing/ForProfessionals'
import Testimonials from '@/components/landing/Testimonials'
import FAQ from '@/components/landing/FAQ'
import DownloadCTA from '@/components/landing/DownloadCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <FeatureGrid />
      <CategoriesRibbon />
      <ForProfessionals />
      <RevenueCalculator />
      <Testimonials />
      <FAQ />
      <DownloadCTA />
    </>
  )
}
