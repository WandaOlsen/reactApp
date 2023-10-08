import { SET_CITY } from "../action/action-type";

/* 
1.初始化状态
2.分支判断，处理状态
3.返回新状态
*/
function city(preState='天津',action){
    let {type,payload}=action;
    let newState=preState;

    switch(type){
        case SET_CITY:
            newState=payload;
            return newState;
        default:
            return newState;
    }
}

export default city;