import React from 'react'
import {connect} from 'react-redux'
import Seller from '../component/seller/Seller'
import {ScrollContainer} from 'react-router-scroll'

const SellerContainer = ({seller}) => {
    return (
        <Seller seller={seller}/>
    )
}
const mapStateToProps = state => ({
    seller: state.seller
})
export default connect(mapStateToProps)(SellerContainer)