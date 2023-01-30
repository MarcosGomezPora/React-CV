import React from 'react';
import './Extra.scss';

const Extra = ({languages, habilities, volunteer}) => {
  return (
    <div><h2>Información Extra</h2>
        <div className='extra'>
        
        <div className='extras'><h2>Idiomas</h2>
            {languages.map((item, index) => {
                return(<div key={index}>
                <h3>{item.language}</h3>
                <h4>{item.wrlevel}</h4>
                <h4>{item.splevel}</h4>
            </div>
                )
            })}
            
        </div>
  
    <div className='extras'><h2>Habilidades y cualidades</h2>
    {habilities.map((item, index) => {
        return(<div key={index}>
            <p>{item}</p>
            
        </div>)
    })}</div>
    <div className='extras'><h2>Voluntariado</h2>
    {volunteer.map((item, index) => {
        return(<div key={index}>
            <h3>{item.name}</h3>
            <h4>{item.where}</h4>
            <p>{item.description}</p>
        </div>)
    })}</div>
    </div>
    </div>
    
    
  )
  
}

export default Extra

