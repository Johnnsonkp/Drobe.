import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export const LoadingSpinner = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

    return(
        <Spin 
            indicator={antIcon} 
            size={'large'} 
            delay={5000} 
            style={{
                margin: "auto", 
                position: "absolute", 
                top: "40%", 
                left: "50%",
            }}/>
    )
}


