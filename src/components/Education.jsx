import React from 'react';
import './Education.scss';

const Education = ({education}) => {
  return (
    <div><h2>Estudios</h2>
      <div className='education'>
    {education.map((item, index) => {
        return(<div key={index}>
        <h3>{item.name}</h3>
        <h4>{item.date}</h4>
        <h4>{item.where}</h4>
        </div>)
    })}</div>
    </div>
    
  )
}

export default Education