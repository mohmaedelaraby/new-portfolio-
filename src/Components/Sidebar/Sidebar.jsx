import React from 'react'
import './Sidebar.css'

function Sidebar() {


  const items = Array.from({ length: 45 }, (_, index) => index + 1)

  return (
    <div className='sidebar-container'>
      {items.map((item) => (
        <div key={item} className='sidebar-num'>{item}</div>
      ))}
    </div>
  )
}

export default Sidebar