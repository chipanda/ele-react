import React from "react"
import ballfly from '../../common/js/ballfly'
import './cartcontrol.sass'

const addClick = (e, id, addFood,dropTarget, animation)=>{
    e.stopPropagation()
    addFood(id)
    if(animation){
        ballfly(e, dropTarget);
    }
}
const CartControl = ({id, quantity, addFood, decreaseFood, dropTarget, animation = false}) => {
    return (
        <div className="cartcontrol">
            <span className={ quantity > 0 ? 'decrease' : 'hidden' }
                  onClick={(e) => {
                      e.stopPropagation()
                      decreaseFood(id, quantity)
                  }}>
                <i className="icon-remove_circle_outline"></i>
            </span>
            <span className={ quantity > 0 ? 'num' : 'hidden' }>{quantity}</span>
            <span className="add"
                  onClick={(e) => {
                      addClick(e, id, addFood,dropTarget, animation)
                  }}>
                <i className="icon-add_circle"></i>
            </span>
        </div>
    )
}

export default CartControl