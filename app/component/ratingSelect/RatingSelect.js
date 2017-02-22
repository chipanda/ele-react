import React from 'react'
import {RATING_NEGATIVE} from '../../constants/RateTypes'
import './ratingSelect.sass'
const RatingSelect = ({selectedType, filterEmptyRatings, rateTypes, changeRateType, toggleFilterEmpty}) => {
    return (
        <div className="rating-select">
            <div className="rating-type border-1px">
                {rateTypes.map(type =>
                    <span className={(type.key === RATING_NEGATIVE ? 'negative' : 'positive') + (selectedType === type.key ? ' active' : '')}
                          key={type.key} onClick={() => changeRateType(type.key)}>{type.text}</span>
                )}
            </div>
            <div className="switch">
                <i className={"icon-check_circle" + (filterEmptyRatings ? ' enable' : '')} onClick={toggleFilterEmpty}></i>
                <span className="switch-text">只看有评价的内容</span>
            </div>
        </div>
    )
}
export default RatingSelect