import { useState } from "react"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

import SidebarItem from "./sidebarItem/sidebarItem"

import "./sidebar.css"

const Sidebar = ({options, currentIndex, setIndex}) => {
    const [ navbarOpen, setNavbarOpen ] = useState(false)
    const handleToggle = () => setNavbarOpen(!navbarOpen)

  return (
    <div className="sidebar-container">
        <button onClick={handleToggle}>
            {navbarOpen ? (
                <MdClose style={{width: "40px", height: "40px" }} />
            ) : (
                <FiMenu style={{width: "40px", height: "40px" }} />
            )}
        </button>
        {navbarOpen ? (
            <ul className="sidebar-list">
                {options.map((option, index) => {
                    return (
                        index === currentIndex ?
                        <SidebarItem 
                            selected={true} 
                            content={option.title} 
                            key={index}
                            id={index}
                            setIndex={setIndex}
                        /> :
                        <SidebarItem 
                            selected={false} 
                            content={option.title} 
                            key={index} 
                            id={index}
                            setIndex={setIndex}
                        />
                    )
                })}
            </ul>
        ): null}
    </div>
  )
}

export default Sidebar