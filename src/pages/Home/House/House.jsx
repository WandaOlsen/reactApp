import React from 'react';
import img from '../../../assets/images/banner1.png'
import style from './House.module.less'

export default function House(props) {
    console.log(props.list);
    return (
        <div className={style.house}>
            <h3 className={style.title}>热门房源</h3>
            <ul className={style.list}>
                {
                    props.list.map(item => {
                        return (
                            <li className={style.item} key={item.id}>
                                <img src={item.imgUrl} alt="" height={200} width={'100%'} />
                                <div className={style.info}>
                                    <div className={style.desc}>
                                        <div>{item.address}</div>
                                        <div>{item.huxing}</div>
                                    </div>
                                    <div className={style.type}>
                                        <div className={style.zu}>{item.type}</div>
                                        <div className={style.price}>{item.price}</div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
};
