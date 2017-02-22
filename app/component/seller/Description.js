import React from 'react'
import Star from '../star/Star'
import './description.sass'
const Description = ({seller, favorite = false, toggleFavorite}) => {
    return (
        <div>
            <div className="head border-1px">
                <h2 className="title">{seller.name}</h2>
                <div className="desc">
                    <div className="star-wrapper">
                        <Star size={36} score={seller.score}/>
                    </div>
                    <span className="rating-count">({seller.ratingCount})</span>
                    <span className="sell-count">月售{seller.sellCount}单</span>
                </div>
                <div className="favorite-wrapper" onClick={toggleFavorite}>
                    <i className={ 'icon-favorite' + (favorite ? ' favorite' : '')}></i>
                    <span className="collect">{favorite ? '已收藏':'收藏'}</span>
                </div>
            </div>
            <ul className="remark">
                <li className="remark-item">
                    <h3>起送价</h3>
                    <span>{seller.minPrice}元</span>
                </li>
                <li className="remark-item">
                    <h3>商家配送</h3>
                    <span>{seller.deliveryPrice}元</span>
                </li>
                <li className="remark-item">
                    <h3>平均配送时间</h3>
                    <span>{seller.deliveryTime}分</span>
                </li>
            </ul>
        </div>
    )
}

export default Description