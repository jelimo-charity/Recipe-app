import React from 'react'
import {useNavigate} from 'react-router-dom'
const Landing = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/recipes');
  }
  return (
<div className='home'>
  <h1>RECIPES</h1>
  <div className="underline"></div>
  <div className="home-box">
  <p>Dive into a world of taste with our recipe app — where creativity meets simplicity. From savory
  to sweet, unlock a treasure trove of culinary inspiration.<span> Elevate your home cooking experience, one 
  delicious recipe at a time.</span></p>
  </div>
  <button onClick={handleClick()}>View Recipes</button>
</div>
  )
}

export default Landing
