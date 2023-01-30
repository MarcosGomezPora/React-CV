import React from 'react'
import { useSelector } from 'react-redux';
import './About.scss'

const About = () => {
  const { about } = useSelector(state => state.about);
  console.log(about)
  return (
    <div>
      <h2>Sobre mí</h2>
      
            <p className='aboutMe'>{about}</p>
        
    </div>
  )
}

export default About