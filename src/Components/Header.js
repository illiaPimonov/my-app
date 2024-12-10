import React from 'react'

export const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>EVOGYM <span className='round'></span></div>
      <div className='nav'>
        <ul className='nav-list'>
          <li>Home</li>
          <li>Benefits</li>
          <li>Our classes</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className='registration-section'>
        <div className='sgn-in'>Sign in</div>
        <div className='mbr-btn'>Become a member</div>
      </div>

    </div>
  )
}
