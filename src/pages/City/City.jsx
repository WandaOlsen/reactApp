import React, { useEffect, useState } from 'react';
import CommonHeader from './../../components/CommonHeader/CommonHeader';
import './City.less'
import { getHotCity } from './../../api'
import {connect} from 'react-redux'
import { SET_CITY } from '../../store/action/action-type';
import { setCityAction } from '../../store/action/actions';

function City(props) {

    let [cities, setCities] = useState([]);
    useEffect(() => {
        getCity();
    }, [])

    async function getCity() {
        try {
            const res = await getHotCity();
            setCities(res.data.indexCitys.hot)
        } catch (error) {
            console.log(error)
        }
    }

    function selectCity(name){
        //console.log(name);
        props.setCity(name)
        
        props.history.goBack();
        //让数据持久化
        console.log(localStorage)
        localStorage.setItem('item',name)
        
    }
    return (
        <div>
            <CommonHeader>城市选择</CommonHeader>

            {/* 当前城市 */}
            <div className="city-box">
                <div className="city-title">
                    当前城市
                </div>
                <div className="city-name">
                    {props.cityName}
                </div>
            </div>


            {/* 热门城市 */}

            <div className="city-box">
                <div className="city-title">
                    热门城市
                </div>
                {
                    cities.map(item => {
                        return (
                            <div className="city-name" key={item.id} onClick={selectCity.bind(
                               null,item.name 
                            )}>
                                {item.name}
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
};

const mapStateToProps=(state)=>{
    return{
        cityName:state.city
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setCity:(name)=>{dispatch(setCityAction(name))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(City)