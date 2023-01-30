import React from 'react'
import { useSelector } from 'react-redux';
import './Me.scss';
const Me = () => {
  const { me } = useSelector(state => state.me);
  return (
        (<div className='person'>
          <div className='profile'>
          {console.log(me.image)}
            <img src={me.image} alt='profile'/>
            <h2>{me.name}</h2>
            
          </div>
          <div>
            <h3>{me.email}</h3> 
            <a className='anchor' href={me.gitHub}>Mi Github</a>
            <h3>{me.phone}</h3>
          
            <h3>{me.adress}</h3>
            <h3>{me.city}</h3>
            <h3>{me.birthDate}</h3>
            
          </div>
        </div>)
  
  )
}

export default Me