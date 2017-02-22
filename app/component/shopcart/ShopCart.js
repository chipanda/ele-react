import React, {Component, PropTypes} from 'react'
import ShopCartList from './ShopCartList'
import ShopCartContent from './ShopCartContent'
import './shopcart.sass'

const ShopCart = ({foodListShow, foods, totalPrice, totalCount, minPrice, deliveryPrice, toggleListShow, addFood, decreaseFood, clearAll}) => {
    return (
        <div className="shop-cart">
            <ShopCartContent totalPrice={totalPrice}
                             totalCount={totalCount}
                             minPrice={minPrice}
                             deliveryPrice={deliveryPrice}
                             toggleListShow={toggleListShow}/>
            <ShopCartList foods={foods}
                          foodListShow={foodListShow}
                          addFood={addFood}
                          decreaseFood={decreaseFood}
                          clearAll={clearAll}/>
            <div className={"shopcart-bg" + (foodListShow ? '' : 'hidden')} onClick={toggleListShow}></div>
        </div>
    )
}


ShopCart.propTypes = {
    seller: PropTypes.object,
    selectedFoods: PropTypes.array
}
export default ShopCart