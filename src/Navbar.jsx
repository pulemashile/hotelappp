import React from 'react'

function navbar() {
  return (
    <nav className='nav'>
          <h1 className='logo'>logo</h1>
       <ul className='list'>
       
        <li>
        <a href='/'>about</a>
        </li>
        <li><a href='/'>contact</a></li>
        <li><a href='/'>home</a></li>
        <button className='btn'> Sign up</button>
        </ul> 
        
    
    </nav>
  )
}

export default navbar