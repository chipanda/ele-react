import React from 'react'
import './shopCartContent.sass'
const PayDesc = (totalPrice, minPrice) => {
    if (totalPrice === 0) {
        return `￥${minPrice}起送`;
    } else if (totalPrice < minPrice) {
        let diff = minPrice - totalPrice;
        return `还差￥${diff}元`;
    } else {
        return "结算";
    }
}
const ShopCartContent = ({totalPrice, totalCount, minPrice, deliveryPrice, toggleListShow}) => {
    let notEmpty = totalCount > 0,
        enough = totalPrice >= minPrice,
        payDesc = PayDesc(totalPrice, minPrice);
    return (
        <div className="shop-cart-content">
            <div className="content-left" onClick={toggleListShow}>
                <div className="logo-wrapper">
                    <div className={'logo ' + ( notEmpty ? 'active' : '')} id="drop-target">
                        <i className="icon-shopping_cart"></i>
                        <span className={'total-count ' + (notEmpty ? '' : 'hidden')}>{totalCount}</span>
                    </div>
                </div>
                <div className="detail">
                    <div className={'price ' + (totalPrice > 0 ? 'active' : '')}>￥{totalPrice}</div>
                    <div className="delivery">另需配送费{deliveryPrice}元</div>
                </div>
            </div>
            <div className="content-right">
                <div className={"pay-wrapper " + (enough ? 'active' : '')}>{payDesc}</div>
            </div>
        </div>
    )
}
export default ShopCartContent