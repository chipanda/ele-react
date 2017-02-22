import React, {Component, PropTypes} from "react"
import './supportIcon.sass'

const classMap = ["decrease", "discount", "special", "invoice", "guarantee"];

const SupportIcon = ({type, supportType})=> {
        let sizeType = "support-" + type + ' ';
        return (
            <span className={'support-icon ' + sizeType + classMap[supportType]}></span>
        )
    }

SupportIcon.propTypes = {
    supportType: PropTypes.number,
    type: PropTypes.string
}
export default SupportIcon