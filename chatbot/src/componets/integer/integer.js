import React from 'react'
import './integer.css'

function Integer(props) 
{
  return (
    <div className='integer-container'>
    <h5>{props.value}</h5>

    <div className='integer-explained'>
        <p>{props.exp}</p>

    </div>
    

    </div>
  )
}

export default Integer