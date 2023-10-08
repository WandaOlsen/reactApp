import React from 'react';
import {NavLink} from 'react-router-dom'
import "./BottomNav.less"


export default function BottomNav() {
    return(
        <div className="nav">
            <div className='item'>
                <NavLink exact to={'/'}>
                    <i className='iconfont icon-shouye'></i>
                    首页
                </NavLink>
            </div>
            <div className='item'>
                <NavLink to={'/shop'}>
                    <i className='iconfont icon-shangcheng'></i>
                    商城
                </NavLink>
            </div>
            <div className='item'>
                <NavLink to={'/live'}>
                    <i className='iconfont icon-shenghuo'></i>
                    生活
                </NavLink>
            </div>
            <div className='item'>
                <NavLink to={'/mine'}>
                    <i className='iconfont icon-wode'></i>
                    我的
                </NavLink>
            </div>
        </div>
    )
};
