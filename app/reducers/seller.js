import {RECEIVE_SELLER} from '../constants/ActionTypes'
const initialState = {
    supports: [],
    pics: [],
    infos: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_SELLER:
            return action.seller;
        default:
            return state;
    }
}