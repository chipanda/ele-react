import React from 'react'
import CartControl from '../cartControl/CartControl'
import './shopCartList.sass'

const ShopCartFood = ({foodListShow, foods, addFood, decreaseFood, clearAll}) => {
    return (
        <div className={"shop-list" + (foodListShow ? '' : 'hidden') }>
            <div className="header">
                <div className="title">购物车</div>
                <div className="empty" onClick={clearAll}>清空</div>
            </div>
            <div id="list-scroll" className="foods">
                <ul>
                    {foods.map(food =>
                        <li className="food" key={food.id}>
                            <span className="name">{food.name}</span>
                            <span className="price">￥{food.price * food.quantity}</span>
                            <div className="cartcontrol-wrapper">
                                <CartControl id={food.id}
                                             quantity={food.quantity}
                                             addFood={addFood}
                                             decreaseFood={decreaseFood}/>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>

    )
}
export default ShopCartFood