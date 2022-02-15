import './Directory.scss'

import MenuItems from '../common/menu-item/MenuItems'

export const Directory = (props) => {
    const loaded = () => {
        return(
            <div className="directory-menu" data-testid="test">
                {props.data.map(({title, imageUrl, id, size, linkUrl}) => {
                    return <MenuItems title={title} img={imageUrl} key={id} size={size} linkUrl={linkUrl}/>
                })}
            </div>
            
        )
    }
    return loaded()
}