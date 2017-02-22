import React, {Component, PropTypes} from "react"
import './star.sass'

const STAR_COUNT = 5
const ON = "on"
const HALF = "half"
const OFF = "off"

const initStarClasses = score =>  {
    let starClasses = [];
    while (starClasses.length < STAR_COUNT) {
        if (score >= 1) {
            starClasses.push(ON);
            score--;
        } else if (score >= 0.5) {
            starClasses.push(HALF);
            score--;
        } else {
            starClasses.push(OFF);
        }
    }
    return starClasses;
}
const Star = ({size, score})=>{
    const stars = initStarClasses(score);
    const starType = 'star-' + size;
    return (
        <ul className={"stars " + starType}>
            {stars.map(function (value, index) {
                return <li className={value + ' star-item'} key={index}></li>
            })}
        </ul>
    )
}

Star.propTypes = {
    score: PropTypes.number,
    size: PropTypes.number
}
export default Star