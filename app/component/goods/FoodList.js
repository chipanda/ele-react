import React, {Component} from "react"
import CartControl from "../cartControl/CartControl"
import './foodList.sass'

const FoodList = ({goods, scrollId, scrollItemClass, addFood, decreaseFood, selectFood}) => {
    return (
        <div className="food-wrapper" id={scrollId}>
            <ul className="categories">
                {goods.map(function (category, index) {
                    return <li className={"category " + scrollItemClass} key={category.name}>
                        <h2 className="category-name">{category.name}</h2>
                        <ul className="foods">
                            {category.foods.map(function (food) {
                                return <li className="food border-1px" key={food.id}
                                           onClick={() => selectFood(food.id)}>
                                    <div className="avatar">
                                        <img width="72px" height="72px" src={food.icon}></img>
                                    </div>
                                    <div className="content">
                                        <h2 className="name">{food.name}</h2>
                                        {food.description ?
                                            <p className="desc">{food.description}</p>
                                            : null
                                        }
                                        <div className="extra">
                                            <span className="sell-count">月售{food.sellCount}份</span><span
                                            className="rating">好评率{food.rating}%</span>
                                        </div>
                                        <div className="price">
                                            <span className="now">￥{food.price}</span>
                                            {food.oldPrice ?
                                                <span className="old">{food.oldPrice}</span>
                                                : null
                                            }
                                        </div>
                                        <CartControl id={food.id}
                                                     quantity={food.quantity}
                                                     addFood={addFood}
                                                     decreaseFood={decreaseFood}
                                                     animation={true}
                                                     dropTarget={document.getElementById('drop-target').getBoundingClientRect()}/>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </li>
                })}
            </ul>
        </div>
    )
}
//}
export default FoodList