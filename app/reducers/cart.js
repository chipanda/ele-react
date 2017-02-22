import {ADD_TO_CART, DECREASE_CART_COUNT, REMOVE_FROM_CART, EMPTY_CART} from '../constants/ActionTypes'

const initialState = {
    addedIds: [],
    quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.indexOf(action.foodId) !== -1) {
                return state;
            }
            return [...state, action.foodId];
        case REMOVE_FROM_CART:
            let index = state.indexOf(action.foodId);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return state;
        default:
            return state;
    }
}
const quantityById = (state = initialState.quantityById, action) => {
    const {foodId} = action;

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                [foodId]: (state[foodId] || 0) + 1
            }
        case DECREASE_CART_COUNT:
            //const {foodId} = action;
            return {
                ...state,
                [foodId]: state[foodId] > 1 ? state[foodId] - 1 : 0
            }
        case REMOVE_FROM_CART:
            //const {foodId} = action;
            if(state[foodId]){
                delete state[foodId]
            }
            return state;
        default:
            return state;
    }
}

export const getQuantity = (state, foodId) => state.quantityById[foodId] || 0

export const getAddedIds = state => state.addedIds

const Cart = (state = initialState, action) => {
    switch (action.type) {
        case EMPTY_CART:
            return initialState;
        default:
            return {
                addedIds: addedIds(state.addedIds, action),
                quantityById: quantityById(state.quantityById, action)
            }
    }
}
export default Cart