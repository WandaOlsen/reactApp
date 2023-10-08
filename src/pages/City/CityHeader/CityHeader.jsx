import React from 'react';
import './CityHeader.less'
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
                城市选择
            </div>
        </div>

    )
};

export default withRouter(CityHeader)



//返回功能
//1.使用withRouter包裹组件    props.history.goBack()

//2.使用useHistory();
//let history=useHistory();

//history.goBack();
