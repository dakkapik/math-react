import React, { useState } from 'react'
import './integer.css'

function Integer(props) 
{
  const [hovering, setHovering] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleClick = () => setClicked(!clicked)
  const handleHoverIn = () => setHovering(true)
  const handleHoverOut = () => setHovering(false)


  return (
    <div className='integer-container'>
    <h5 onMouseOver={handleHoverIn} onMouseLeave={handleHoverOut} onClick={handleClick}>{props.value}</h5>
      {hovering || clicked? (
        <div className={clicked ? 'explained-clicked':'explained'}>
            <p>{props.exp}</p>
        </div>
      ): null }
    </div>
  )
}

export default Integer