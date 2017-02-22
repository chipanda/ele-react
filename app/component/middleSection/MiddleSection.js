import React, {Component, PropTypes} from "react"
import './middleSection.sass'
const MiddleSection = ({title}) => {
    return (
        <div className="title-wrapper">
            <span className="line"></span>
            <span className="title">{title}</span>
            <span className="line"></span>
        </div>
    )
}

MiddleSection.propTypes = {
    title: PropTypes.string
}
export default MiddleSection