import React from 'react'

export const Ancla = ({style,link,textAncla}) => {
  return (

    <a className={style} href={link}>{textAncla}</a>
    
  )
}
