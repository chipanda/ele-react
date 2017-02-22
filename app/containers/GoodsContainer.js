import React, {Component, PropTypes} from "react"
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import {getVisibleFoods, getDetailFood} from '../reducers'
import {ADD_TO_CART, DECREASE_CART_COUNT, REMOVE_FROM_CART, SELECT_FOOD} from '../constants/ActionTypes'
import {GOODS} from '../constants/PostTypes'
import Goods from '../component/goods/Goods'


const GoodsContainer = ({goods, detailFood, initialGoods, addFood, decreaseFood, selectFood}) => {
    return (
        <Goods goods={goods}
               detailFood={detailFood}
               initialGoods={initialGoods}
               addFood={addFood}
               decreaseFood={decreaseFood}
               selectFood={selectFood}/>
    )
}
GoodsContainer.propTypes = {
    goods: PropTypes.array
}

const mapStateToProps = (state) => ({
    goods: getVisibleFoods(state),
    detailFood: getDetailFood(state)
})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initialGoods: () => dispatch(fetchPosts(GOODS)),
        addFood: id => dispatch({
            type: ADD_TO_CART,
            foodId: id
        }),
        decreaseFood: (id, quantity) => {
            if (quantity === 1) {
                dispatch({
                    type: REMOVE_FROM_CART,
                    foodId: id
                })
            } else {
                dispatch({
                    type: DECREASE_CART_COUNT,
                    foodId: id
                })
            }
        },
        selectFood: (id) => {
            dispatch({
                type: SELECT_FOOD,
                foodId: id
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GoodsContainer)