import './menu-item.styles.scss'

import React from 'react';

export const MenuItem = (props) => {
  const {title, img, size} = props 
    return (
        <div style={{
          backgroundImage: `url(${img})`
        }} className={`${size} menu-item`}>

          <div className='background-image' style={{
            backgroundImage: `url(${img})`
          }} />
          
          <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">View items</span>
          </div>
        </div>
    )
}