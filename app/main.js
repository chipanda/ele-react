import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, IndexRedirect, hashHistory, browserHistory} from 'react-router'
import App from './containers/App'
import GoodsContainer from './containers/GoodsContainer'
import RatingsContainer from './containers/RatingsContainer'
import SellerContainer from './containers/SellerContainer'
import configureStore from './store'
import './common/css/index.sass'

const store = configureStore();
const manageScroll = (prevRouterProps, { routes }) => {
    return [0,100]
    if (routes.some(route => route.ignoreScrollBehavior)) {
        return false;
    }

    if (routes.some(route => route.scrollToTop)) {
        console.log('...')
        return [0, 100];
    }
    console.log(prevRouterProps)
    console.log(routes)
    return true;
}
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/goods"/>
                <Route path="goods" component={GoodsContainer}></Route>
                <Route path="ratings" component={RatingsContainer}></Route>
                <Route path="seller" component={SellerContainer}></Route>
            </Route>
        </Router>
    </Provider>
    , document.getElementById('app')
);