import React from 'react'
import { Ancla } from '../Ancla/Ancla'


export const NavHome = () => {
  return (
    <nav className='navHome'>
        <Ancla
        style="ancla"
        link="https://google.com" 
        textAncla="Home"
        />
        <Ancla 
        style="ancla" 
        link="https://facebook.com" 
        textAncla="AboutUS"
        />
        <Ancla 
        style="ancla" 
        link="https://instagram.com" 
        textAncla="ContactUs"/>

    </nav>
  )
}
