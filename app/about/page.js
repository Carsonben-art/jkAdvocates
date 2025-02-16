import AboutHero from '@/components/about/AboutHero'
import IntegritySection from '@/components/about/IntegritySection'
import MissionSection from '@/components/about/MissionSection'
import WhyWorkWithUs from '@/components/about/WhyWorkWithUs'
import TeamSection from '@/components/home/TeamSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <AboutHero />
      <IntegritySection />
      <MissionSection />
      <WhyWorkWithUs />
      <TeamSection />
    </div>
  )
}

export default page