import React from 'react'
import './HomePage.css'
import { ReactTyped } from 'react-typed'
function HomePage() {
  const right = `{" `
  const left = ` "}`
  return (
    <div className='homepage'>
      <div className="homepage_container">
        <div className="my_name">
          <div className="name_text">// HI, I'M Mohamed EL-Araby, A...</div>
          <div className="name_animation">
            {right}
          <ReactTyped showCursor startWhenVisible strings={["_Front End Engineer..."]} typeSpeed={100} backSpeed={100} loop className='name_animation_text'/>
          {left}
          </div>
        </div>
        <div className="bg_1">

        </div>
      </div>
    </div>
  )
}

export default HomePage