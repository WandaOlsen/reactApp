import React, { useEffect, useState } from 'react';
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import MyInput from '../../components/MyInput/MyInput';
import './Search.less'
import SearchList from './SearchList/SearchList';
import { getSearch } from './../../api'
import { connect } from 'react-redux'


function Search(props) {

    const [list, setList] = useState([]);
    useEffect(() => {
        getSearchList();

        async function getSearchList() {
            try {
                const res = await getSearch({ city: props.city, val: props.match.params.val })
                //console.log(res)
                setList(res.list)
            } catch (error) {
                console.log(error);
            }
        }
    }, [props.city, props.match.params.val])


    return (
        <div>
            {/* 公共头部 */}

            <CommonHeader>
                <div className='input'>
                    <MyInput></MyInput>
                </div>

            </CommonHeader>


            <div>
                接受到的搜索参数:{props.match.params.val}
            </div>



            <SearchList list={list}></SearchList>

        </div>
    )
}

export default connect(state => ({
    city: state.city
}))(Search)