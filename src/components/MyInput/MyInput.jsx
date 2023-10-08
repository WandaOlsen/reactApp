import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const inputStyle={
    height:"0.6rem",
    width:"100%",
    borderRadius:"0.1rem",
    paddingLeft:"0.2rem"
}

export default function MyInput() {
    const [val,setVal]=useState('')

    const history=useHistory();

    function getInput(e){
        setVal(e.target.value)
    }
    //键盘抬起事件
    function getKeyUp(e){
        //console.log(e.keyCode);
        if(e.keyCode===13){
            //回车键的keyCode是13
            //编程式导航
            history.push('/search/1400')
        }
    }
    return(
        <>
            {/* 受控组件 功能：输入信息，回车，跳转页面*/}
            <input value={val} onChange={getInput} onKeyUp={getKeyUp} style={inputStyle} />
        </>
    )
};
