import React, { useEffect, useState } from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import MyCarousel from '../../components/MyCarousel/MyCarousel';
import { getBanner,getHotHouse } from './../../api'
import './Home.less'
import House from './House/House'
import { connect } from 'react-redux';
/* import banner1 from "./../../assets/images/banner1.png";
import banner2 from "./../../assets/images/banner2.png";
import banner3 from "./../../assets/images/banner3.png"; */

//import banner1 from "../../assets/images/小亮1.jpg";
//import banner2 from "../../assets/images/小亮2.jpg";
//import banner3 from "../../assets/images/小亮3.jpg";

//const list=[banner1,banner2,banner3];

function Home(props) {

    //生命周期：页面挂载完成=>类组件：componentDidMount()
    //函数组件：useEffect

    let [list, setList] = useState([]);
    let [houses,setHouses]=useState([]);

    useEffect(() => {
        //getBanner().then(res=>{
        //    console.log(res);
        //  setList(res.banner)
        //}).catch(err=>{console.log(err)});
        getBannerList();
        
    },[])
    useEffect(()=>{
        getHotHouseList();
        async function getHotHouseList(){
            try {
                const res=await getHotHouse({city:props.cityname});  //参数是依赖，基于依赖发请求
                setHouses(res.list);
            } catch (error) {
                console.log(error);
                console.log("出错了米娜桑");
            }
        }
    },[props.cityname])
    async function getBannerList() {
        try {
            const res = await getBanner();
            setList(res.banner)
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div>
            <HomeHeader cityName={props.cityname} />
            <MyCarousel list={list} />

            <div className="navs">
                <div className="item">找舍友</div>
                <div className="item">宜居社区</div>
            </div>


            <House list={houses}></House>

        </div>
    )
};


export default connect(state=>({
    cityname:state.city
}))(Home)