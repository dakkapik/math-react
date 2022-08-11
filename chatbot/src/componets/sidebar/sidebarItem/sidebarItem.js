import './sidebarItem.css'

function SidebarItem({selected, content, id, setIndex}) {
  const handleClick =() => setIndex(id)
  return (
    <div className={selected?"sidebar-item-selected":"sidebar-item"} onClick={handleClick}>
      {content}
    </div>
  )
}

export default SidebarItem