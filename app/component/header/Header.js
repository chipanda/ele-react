import React from 'react'
import ToggleShow from '../../common/component/toggleShow/ToggleShow'
import SupportIcon from "../supportIcon/SupportIcon"
import Star from '../star/Star'
import MiddleSection from '../middleSection/MiddleSection'
import "./header.sass"
const Header = ({seller, promptShow, toggleShow}) => {
    return (
        <div className="header">
            <div className="content-wrapper">
                <div className="avatar">
                    <img width="64" height="64" src={seller.avatar}></img>
                </div>
                <div className="content">
                    <div className="title">
                        <span className="brand"></span><span
                        className="name">{seller.name}</span>
                    </div>
                    <div className="description">
                        {seller.description}/{seller.deliveryTime}分钟送达
                    </div>
                    {seller.supports.length > 0 ?
                        <div className="support">
                            <SupportIcon type="1" supportType={seller.supports[0].type}/><span
                            className="text">{seller.supports[0].description}</span>
                        </div> : null
                    }
                </div>
                {seller.supports.length > 0 ?
                    <div className="support-count" onClick={toggleShow}>
                        <span className="count">{seller.supports.length}个</span>
                        <i className="icon-keyboard_arrow_right"></i>
                    </div> : null
                }
            </div>
            <div className="bulletin-wrapper" onClick={toggleShow}>
                <span className="title"></span><span
                className="text">{seller.bulletin}</span><span
                className="icon-keyboard_arrow_right"></span>
            </div>
            <div className="background">
                <img src={seller.avatar} width="100%" height="100%"></img>
            </div>
            <ToggleShow ifShow={promptShow} transitionName="prompt-detail">
                <div className="prompt-detail">
                    <div className="content"><h1 className="name">{seller.name}</h1>
                        <div className="star-wrapper">
                            <Star score={seller.score} size={48}/>
                        </div>
                        <MiddleSection title="优惠信息"/>
                        <ul className="support">
                            {seller.supports.map(function (support) {
                                return (<li className="support-item" key={support.description}>
                                    <SupportIcon className="icon" supportType={support.type} type="2"/>
                                    <span className="text">{support.description}</span>
                                </li>)
                            })}
                        </ul>
                        <MiddleSection title="商家信息"/>
                        <div className="bulletin">{seller.bulletin}</div>
                    </div>
                    <div className="footer" onClick={toggleShow}>
                        <span className="icon-close"></span>
                    </div>
                </div>
            </ToggleShow>

        </div>
    )
}

export default Header
