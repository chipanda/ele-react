import {combineReducers} from 'redux'
import {RECEIVE_GOODS, SELECT_FOOD} from '../constants/ActionTypes'

const byId = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_GOODS:
            let id = 1000;
            return {
                ...state,
                ...action.goods.reduce((obj, good) => {
                    return good.foods.reduce((obj, food) => {
                        food.id = id++;
                        obj[food.id] = food;
                        return obj;
                    }, obj)
                }, {})
            }
        default:
            return state;
    }
}

const visibleIds = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_GOODS:
            return action.goods.map(good => {
                let foods = good.foods.map(food => food.id);
                return {
                    ...good,
                    foods
                };
            })
        default:
            return state;
    }
}


export const getFood = (state, id) => {
    if (id) {
        return state.byId[id]
    } else {
        return {
            ratings:[]
        }
    }
}

const detailId = (state = null, action) => {
    switch (action.type) {
        case SELECT_FOOD:
            return action.foodId
        default:
            return state;
    }
}

export default combineReducers({
    byId,
    visibleIds,
    detailId
})