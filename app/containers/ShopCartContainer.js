import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {getCartFoods, getTotal, getTotalCount}from '../reducers'
import {ADD_TO_CART, DECREASE_CART_COUNT, REMOVE_FROM_CART, EMPTY_CART} from '../constants/ActionTypes'
import ShopCart from '../component/shopcart/ShopCart'

class ShopCartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodListShow: false
        }
        this.toggleListShow = this.toggleListShow.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.foodListShow && nextProps.totalCount === 0) {
            //在购物车中减去所有商品后，隐藏food list
            this.setState({
                foodListShow: false
            })
        }
    }

    render() {
        return (
            <ShopCart foodListShow={this.state.foodListShow}
                      foods={this.props.cartFoods}
                      totalPrice={this.props.totalPrice}
                      totalCount={this.props.totalCount}
                      minPrice={this.props.minPrice}
                      deliveryPrice={this.props.deliveryPrice}
                      toggleListShow={this.toggleListShow}
                      addFood={this.props.addFood}
                      decreaseFood={this.props.decreaseFood}
                      clearAll={this.props.clearAll}/>
        )
    }

    toggleListShow() {
        if (this.props.totalCount > 0) {
            this.setState({
                foodListShow: !this.state.foodListShow
            })
        }
    }
}
ShopCartContainer.propTypes = {
    cartFoods: PropTypes.array,
    totalPrice: PropTypes.number,
    totalCount: PropTypes.number,
    minPrice: PropTypes.number,
    deliveryPrice: PropTypes.number
}

const mapStateToProps = (state) => ({
    cartFoods: getCartFoods(state),
    totalPrice: getTotal(state),
    totalCount: getTotalCount(state),
    minPrice: state.seller.minPrice,
    deliveryPrice: state.seller.deliveryPrice,
})

export default connect(
    mapStateToProps,
    {
        addFood: id => ({
            type: ADD_TO_CART,
            foodId: id
        }),
        decreaseFood: (id, quantity) => {
            if (quantity === 1) {
                return {
                    type: REMOVE_FROM_CART,
                    foodId: id
                }
            } else {
                return {
                    type: DECREASE_CART_COUNT,
                    foodId: id
                }
            }
        },
        clearAll: () => ({
            type: EMPTY_CART
        })
    }
)(ShopCartContainer)