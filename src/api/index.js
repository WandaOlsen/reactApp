import Ajax from './ajax'
import base from './base'

/* const api={
    toRegister(){
        return Ajax.get('/');
    },
} */
//export default api

//export const getBanner=()=>{
//    return Ajax.get(base.banner)
//}

export const getBanner=()=>Ajax.get(base.banner)

export const getHotHouse=(params)=>Ajax.get(base.hothouse,{params})

export const getHotCity=()=>Ajax.get(base.selectCity);

export const getSearch=(params)=>Ajax.get(base.search,{params:params})