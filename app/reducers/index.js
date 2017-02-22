import {combineReducers} from 'redux'
import seller from './seller'
import ratings from './ratings'
import cart, * as fromCart from './cart'
import goods, * as fromGoods from './goods'

export default combineReducers({
    seller,
    goods,
    ratings,
    cart
})


const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getFood = (state, id) => fromGoods.getFood(state.goods, id)

export const getTotal = state =>
    getAddedIds(state)
        .reduce((total, id) =>
            total + getFood(state, id).price * getQuantity(state, id),
            0
        )
export const getTotalCount = state =>
    getAddedIds(state)
        .reduce((total, id) =>
            total + getQuantity(state, id),
            0
        )

export const getCartFoods = state =>
    getAddedIds(state).map(id => ({
        ...getFood(state, id),
        quantity: getQuantity(state, id)
    }))

export const getVisibleFoods = state =>
    state.goods.visibleIds.map(good => ({
        ...good,
        foods: good.foods.map(id => ({
            ...getFood(state, id),
            quantity: getQuantity(state, id)
        }))
    }))

export const getDetailFood = state => {
    return ({
        ...getFood(state, state.goods.detailId),
        quantity: getQuantity(state, state.goods.detailId)
    })
}