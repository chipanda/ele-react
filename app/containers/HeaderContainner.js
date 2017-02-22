import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from '../component/header/Header'

class HeaderContainner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promptShow: false
        }
        //bind this to custom function
        this.toggleShow = this.toggleShow.bind(this);
    }
    render() {
        return (
            <Header seller={this.props.seller} promptShow={this.state.promptShow} toggleShow={this.toggleShow}/>
        )
    }
    toggleShow(){
        this.setState({promptShow: !this.state.promptShow})
    }
}
function mapStateToProps(state) {
    return {
        seller: state.seller
    };
}
export default connect(mapStateToProps)(HeaderContainner)