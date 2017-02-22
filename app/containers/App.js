import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import HeaderContainer from "./HeaderContainner"
import NavigationBar from '../component/navigation/NavigationBar'
import ShopCartContainer from './ShopCartContainer'
import {fetchPosts} from '../actions'
import {SELLER} from '../constants/PostTypes'
import {urlParse} from '../common/js/util'
class App extends Component {
    constructor(props) {
        super(props);
        this.props.initSeller();
    }
    render() {
        return (
            <div>
                <HeaderContainer/>
                <NavigationBar/>
                {this.props.children}
                <ShopCartContainer/>
            </div>
        )
    }
}
// function mapStateToProps(state) {
//     return {
//         seller: state.seller
//     };
// }
function mapDispatchToProps(dispatch, ownProps) {
    return {
        initSeller: () => dispatch(fetchPosts(SELLER, urlParse().id))
    }
}
export default connect(null, mapDispatchToProps)(App);

