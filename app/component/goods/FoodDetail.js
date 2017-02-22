import React from 'react'
import Split from '../split/Split'
import RatingSelect from '../ratingSelect/RatingSelect'
import Rating from './Rating'
import CartControl from '../cartControl/CartControl'
import {RATING_ALL, RATING_POSITIVE, RATING_NEGATIVE} from '../../constants/RateTypes'
import './foodDetail.sass'
const rateTypes = [
    {
        key: RATING_ALL,
        text: '全部'
    },
    {
        key: RATING_POSITIVE,
        text: '推荐'
    },
    {
        key: RATING_NEGATIVE,
        text: '吐槽'
    }
];
const FoodDetail = ({food, detailScrollId, hiddenDetail, addFood, decreaseFood, rateType, filterEmptyRatings, changeRateType, toggleFilterEmpty}) => {
    let ratings = food.ratings.filter(rating => {
        if (rateType === 2) {
            return true && (!filterEmptyRatings || rating.text)
        } else {
            return rating.rateType === rateType && (!filterEmptyRatings || rating.text)
        }
    })
    let dropTarget = null;
    if (food.id) {
        dropTarget = document.getElementById('drop-target').getBoundingClientRect()
    }
    return (
        <div id={detailScrollId} className="foodDetail">
            <div>
                <div className="img-header">
                    <img src={food.image}/>
                    <i className="icon-arrow_lift back-hook" onClick={hiddenDetail}></i>
                </div>
                <div className="food-content">
                    <h2 className="title">{food.name}</h2>
                    <div className="extra">
                        <span className="sell">月售{food.sellCount}份</span>
                        <span className="rating">好评率{food.rating}%</span>
                    </div>
                    <div className="price">
                        <span className="new">￥{food.price}</span>
                        {food.oldPrice ?
                            <span className="old">￥{food.oldPrice}</span>
                            : null
                        }
                    </div>
                    <span className={"addcart" + (food.quantity === 0 ? '' : ' hidden')}
                          onClick={() => addFood(food.id)}>加入购物车</span>
                    <div className="cartcontrol-wrapper">
                        <CartControl id={food.id}
                                     quantity={food.quantity}
                                     addFood={addFood}
                                     decreaseFood={decreaseFood}
                                     animation={true}
                                     dropTarget={dropTarget}/>
                    </div>
                </div>
                <Split/>
                <div className={"food-info" + (food.info ? '' : ' hidden')}>
                    <h2 className="title">商品介绍</h2>
                    <p className="info">{food.info}</p>
                </div>
                <div className={food.info ? '' : ' hidden'}>
                    <Split/>
                </div>
                <div className="food-rating border-1px">
                    <h2 className="title">商品评价</h2>
                    <RatingSelect selectedType={rateType}
                                  filterEmptyRatings={filterEmptyRatings}
                                  rateTypes={rateTypes}
                                  changeRateType={changeRateType}
                                  toggleFilterEmpty={toggleFilterEmpty}/>
                </div>
                <ul className="rating-content">
                    {ratings.map(rating => <Rating key={rating.rateTime} rating={rating}/>)}
                </ul>
                <div className={"no-rating" + (ratings.length === 0 ? '' : ' hidden')}>暂无评价</div>
            </div>
        </div>
    )
}

export default FoodDetail