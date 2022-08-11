import React, {useState} from 'react'
import './vinculum.css'
function Vinculum(props) {
  const [hovering, setHovering] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleClick = () => setClicked(!clicked)
  const handleHoverIn = () => setHovering(true)
  const handleHoverOut = () => setHovering(false)

  return (
    <div className='vinculum-container'>
        <div className='vinculum-line' onMouseOver={handleHoverIn} onMouseLeave={handleHoverOut} onClick={handleClick}/>
        {hovering||clicked ? (
          <div className={clicked ? 'explained-clicked':'explained'}>
              <p> {props.exp}</p>
          </div>
        ) :null}
    </div>
  )
}

export default Vinculum