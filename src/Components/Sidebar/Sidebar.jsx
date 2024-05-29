import React from 'react'
import './Sidebar.css'

function Sidebar() {
    const items = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,11,1,1,1,1,1,1,11,1,1,1,1,1,1,11,1,1,1,1,1,1,1]
  return (
    <div className='sidebar-container'>
        
        {
            items.map((item,index)=>(
                <div key={item} className='sidebar-num'>{index}</div>
            ))

        }
    </div>
  )
}

export default Sidebar