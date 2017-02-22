import React from 'react'
import '../../common/js/date'
import './rating.sass'

const dateFormatter = date => new Date(date).Format("yyyy-MM-dd hh:mm")
const Rating = ({rating}) => {
    return (
        <li className="detail-rating-item border-1px">
            <div className="head">
                <span className="time">{dateFormatter(rating.rateTime)}</span>
                <span className="avatar">
                    <img src={rating.avatar} width="12px" height="12px"></img>
                </span>
                <span className="username">{rating.username}</span>
            </div>
            <div className="content">
                <span className={rating.rateType === 0 ? 'thumb icon-thumb_up' : 'thumb icon-thumb_down'}></span>
                <span>{rating.text}</span>
            </div>
        </li>

    )
}
export default Rating







