import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

export default function configureStore(initialState){
    const store = createStore(reducer, initialState, applyMiddleware(thunk));
    return store;
}
