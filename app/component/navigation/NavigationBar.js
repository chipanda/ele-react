import React from 'react'
import {Link} from 'react-router'
import './navigationBar.sass'
const NavigationBar = () => {
    return (
        <ul className="nav border-1px">
            <li className="tab-item"><Link to="/goods" activeClassName="nav-active">商品</Link></li>
            <li className="tab-item"><Link to="/ratings" activeClassName="nav-active">评论</Link></li>
            <li className="tab-item"><Link to="/seller" activeClassName="nav-active">商家</Link></li>
        </ul>
    )
}
export default NavigationBar