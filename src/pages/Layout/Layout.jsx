import React from 'react';
import BottomNav from '../../components/BottomNav/BottomNav';
import "./Layout.less"

export default function Layout(props) {
    return(
        <div>
            {/*路由出口*/}
            <div className="content">
                {
                    props.children
                }
            </div>
            {/* 公共底部 */}
            <div className="footer">
                <BottomNav/>
            </div>
        </div>
        
        
    )
};
