import React, {Component} from "react"
import Star from '../star/Star'
import Split from '../split/Split'
import RatingSelect from '../ratingSelect/RatingSelect'
import {RATING_ALL, RATING_POSITIVE, RATING_NEGATIVE} from '../../constants/RateTypes'
import BScroll from 'better-scroll'
import '../../common/js/date'
import './ratings.sass'
const dateFormatter = date => new Date(date).Format("yyyy-MM-dd hh:mm")
class Ratings extends Component {
    constructor(props) {
        super(props);
        this.scrollId = 'rating-scroll-wrapper';
        this.state = {
            rateType: RATING_ALL,
            filterEmptyRatings: true
        }
        this.changeRateType = this.changeRateType.bind(this);
        this.toggleFilterEmpty = this.toggleFilterEmpty.bind(this);
    }

    componentDidMount() {
        this.scroll = new BScroll(document.getElementById(this.scrollId), {
            click: true
        });
    }

    componentDidUpdate() {
        this.scroll.refresh();
    }

    render() {
        let rateTypes = [
            {
                key: RATING_ALL,
                text: '全部'
            },
            {
                key: RATING_POSITIVE,
                text: '好评'
            },
            {
                key: RATING_NEGATIVE,
                text: '差评'
            }
        ];
        let seller = this.props.seller,
            ratings = this.props.ratings.filter(rating => {
                if (this.state.rateType === 2) {
                    return true && (!this.state.filterEmptyRatings || rating.text)
                } else {
                    return rating.rateType === this.state.rateType && (!this.state.filterEmptyRatings || rating.text)
                }
            });
        return (
            <div className="ratings-wrapper" id={this.scrollId}>
                <div>
                    <div className="overview">
                        <div className="left">
                            <span className="score">{seller.score}</span>
                            <span className="desc">综合评分</span>
                            <span className="rank">高于周边商家{seller.rankRate}%</span>
                        </div>
                        <div className="right">
                            <dl className="overview-detail">
                                <dt>服务态度</dt>
                                <dd>
                                    <div className="star">
                                        <Star score={seller.serviceScore} size={36}/>
                                    </div>
                                    <span>{seller.serviceScore}</span>
                                </dd>
                                <br/>
                                <dt>食物评分</dt>
                                <dd>
                                    <div className="star">
                                        <Star score={seller.score} size={36}/>
                                    </div>
                                    <span>{seller.score}</span>
                                </dd>
                                <br/>
                                <dt>送达时间</dt>
                                <dd>
                                    <span className="delivery-time">{seller.deliveryTime}分钟</span>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <Split/>
                    <RatingSelect selectedType={this.state.rateType}
                                  filterEmptyRatings={this.state.filterEmptyRatings}
                                  rateTypes={rateTypes}
                                  changeRateType={this.changeRateType}
                                  toggleFilterEmpty={this.toggleFilterEmpty}/>
                    <ul className="ratings">
                        {ratings.map(rating => (
                            <li className="rating-item border-1px" key={rating.rateTime}>
                                <div className="avatar">
                                    <img width="28px" height="28px" src={rating.avatar}/>
                                </div>
                                <div className="content">
                                    <div className="name">{rating.username}</div>
                                    <div>
                                        <div className="star">
                                            <Star score={rating.score} size={24}/>
                                        </div>
                                        {rating.deliveryTime ?
                                            <span className="delivery-time">{rating.deliveryTime}分送达</span>
                                            : null
                                        }
                                    </div>
                                    <div className="text">
                                        {rating.text}
                                    </div>
                                    <div className="recommend">
                                    <span
                                        className={rating.rateType === 0 ? 'icon-thumb_up' : 'icon-thumb_down'}></span>
                                        {rating.recommend.map((item, index) => <span className="recommend-text"
                                                                                     key={index}>{item}</span>
                                        )}
                                    </div>
                                    <div className="ratingtime">{dateFormatter(rating.rateTime)}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

    changeRateType(type) {
        if (this.state.rateType !== type) {
            this.setState({
                rateType: type
            })
        }
    }

    toggleFilterEmpty() {
        this.setState({
            filterEmptyRatings: !this.state.filterEmptyRatings
        })
    }
}

export default Ratings