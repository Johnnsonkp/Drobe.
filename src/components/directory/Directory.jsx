import './Directory.scss'

import React, {useEffect, useState} from 'react'

import { LoadingSpinner } from '../common/loadSpinner/loadSpinner'
import { MenuItem } from '../common/menu-item/MenuItems'

export const Directory = () => {
    const [sectionContent, setSectionContent] = useState(null)
    useEffect(() => {
        fetch('homeSections.json' ,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((response) => setSectionContent(response))
    }, [])

    const loaded = () => {
        return(
            <div className="directory-menu">
                {sectionContent !== null && sectionContent.map(({title, imageUrl, id, size}) => {
                    return <MenuItem title={title} img={imageUrl} key={id} size={size}/>
                })}
            </div>
        )
    }
    return sectionContent? loaded() : <LoadingSpinner />
}