import React from 'react'
import './Experience.scss'

const Experience = ({experience}) => {
  return (
    <div><h2>Experiencia</h2>
      <div className='experience'>
    {experience.map((item, index) => {
        return(<div key={`${item.name}-${item.description}`} className='experiences'>
            <h3>{item.name}</h3>
            <h4>{item.date}</h4>
            <h4>{item.where}</h4>
            <p>{item.description}</p>
        </div>)
    })}</div>
    </div>
    
  )
}

export default Experience