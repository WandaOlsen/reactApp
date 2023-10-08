import React from 'react';
import {Link} from "react-router-dom"
import "./HomeHeader.less"
import MyInput from '../../../components/MyInput/MyInput';


export default function HomeHeader(props) {
    return(
        <div className='home-header'>
            {/* 左侧 */}
            <div className="address">
                <Link to={"/city"}>
                    {props.cityName}
                    <i className='iconfont icon-DownArrow'></i>
                </Link>
            </div>            
            {/* 搜索 */}
            <div className="search">
                <MyInput/>
            </div>
            {/* 右侧 */}
            <div className="cart">
                <i className='iconfont icon-SHOPPING'></i>
            </div>
        </div>
    )
};

