import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='navbar'>
        <ul>
            <li> <Link to= "/">Home</Link></li>
            <li> <Link to= "/recipes">Recipes</Link></li>
            {/* <li> <Link to= "/footer">Contact</Link></li> */}
        </ul>
    </div>
  )
}

export default Header
