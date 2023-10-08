import React from 'react';
import './CommonHeader.less'
import {withRouter,useHistory} from 'react-router-dom'


function CityHeader(props) {
    function back(){
        props.history.goBack()
    }
    return (
        //<div className={style['city-header']}>
          //  <i className='iconfont icon-left'></i>
            //<div className={style.title}>
        //        城市选择
          //  </div>
        //</div>
        <div className='city-header'>
            <i className='iconfont icon-left' onClick={back}></i>
            <div className='title'>
                {props.children}
            </div>
        </div>

    )
};

export default withRouter(CityHeader)



