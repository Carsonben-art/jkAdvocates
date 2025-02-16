import AboutHero from '@/components/about/AboutHero'
import IntegritySection from '@/components/about/IntegritySection'
import MissionSection from '@/components/about/MissionSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <AboutHero />
      <IntegritySection />
      <MissionSection />
    </div>
  )
}

export default page