import React, {Component, PropTypes}from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import {RATINGS} from '../constants/PostTypes'
import Ratings from '../component/ratings/Ratings'

class RatingsContainer extends Component {
    componentWillMount() {
        this.props.initRatings()
    }

    render() {
        return (
            <Ratings seller={this.props.seller} ratings={this.props.ratings}/>
        )
    }
}
const mapStateToProps = (state) => ({
    seller: state.seller,
    ratings: state.ratings
})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initRatings: () => dispatch(fetchPosts(RATINGS))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RatingsContainer)
