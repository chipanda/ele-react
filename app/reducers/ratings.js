import { RECEIVE_RATINGS } from '../constants/ActionTypes'

export default (state = [], action) => {
    switch (action.type) {
        case RECEIVE_RATINGS:
            return action.ratings;
        default:
            return state;
    }
}