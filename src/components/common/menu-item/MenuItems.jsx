import './menu-item.styles.scss'

import React from 'react';
import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router";
import { withRouter } from '../../../helpers/withRouter';

const MenuItems = (props) => {
  const {title, img, size, linkUrl, match} = props 
  const Navigate = useNavigate()
  
    return (
        <div style={{
          backgroundImage: `url(${img})`
        }} className={`${size} menu-item`} onClick={() => Navigate(`${linkUrl}`)}>

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

export default withRouter(MenuItems)