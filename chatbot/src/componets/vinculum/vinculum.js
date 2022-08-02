import React from 'react'
import './vinculum.css'
function Vinculum(props) {
  return (
    <div className='vinculum-container'>
        <div className='vinculum-line'/>

        <div className='vinculum-explaination'>
            <p> {props.exp}</p>
        </div>
    </div>
  )
}

export default Vinculum