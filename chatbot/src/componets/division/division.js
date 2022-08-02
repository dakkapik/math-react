import React from 'react'
import "./division.css"
import Integer from '../integer/integer'
import Vinculum from '../vinculum/vinculum'

function Division() {
  return (
    <div className='division-container'>
        <Integer value={2} exp={'divident explaintion goes here'}/>

        <Vinculum exp={'vinculum explainition'}/>

        <Integer value={6} exp={'div'}/>

    </div>
  )
}

export default Division