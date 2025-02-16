import Image from 'next/image'
import React from 'react'
import './StatsSection.css'

const StatsSection = () => {
  return (
    <div className='stats-section'>
      <Image src={"/advocate2.jpg"} width={350} height={400} alt='advocate'/>
      <div className="stats-container">
        <div className="stats">
            <h1>7+</h1>
            <p>Years of Experience</p>
            
        </div>
        <div className="stats">
            <h1>87%</h1>
            <p>Percentages of Success rate.</p>
            
        </div>
        <div className="stats">
            <h1>907k</h1>
            <p>Clients Satisfaction</p>
        </div>
      </div>
      <Image src={"/advocate3.jpg"} width={350} height={400} alt='advocate'/>
    </div>
  )
}

export default StatsSection
