import React from 'react'
import { TiMessageTyping } from "react-icons/ti";
import { MdOutlineSettingsPhone } from "react-icons/md";
import './AdSection.css'
const AdSection = () => {
  return (
    <div className='ad-section'>
      <div className="text-container">
        <h1>Talk to us, solve your problems</h1>
      </div>
      <div className="buttons-container">
            <button className="consultation"> <TiMessageTyping /> Free consultation</button>
            <button className="contact"> <MdOutlineSettingsPhone /> +2547 9443 7498</button>
      </div>
    </div>
  )
}

export default AdSection
