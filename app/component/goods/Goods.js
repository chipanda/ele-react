import React, {Component} from "react"
import ToggleShow from '../../common/component/toggleShow/ToggleShow'
import MenuList from './MenuList'
import FoodList from './FoodList'
import FoodDetail from './FoodDetail'
import BScroll from 'better-scroll'
import './goods.sass'
import {RATING_ALL} from '../../constants/RateTypes'

class Goods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            detailShow: false,
            rateType: RATING_ALL,
            filterEmptyRatings: true
        };
        this.menuScollId = 'menu-scroll';
        this.foodScollId = 'food-scroll';
        this.foodScollItemClass = 'food-list-hook';
        this.detailScrollId = 'food-detail-scroll'
        this.listHeight = [];
        this._initScroll = this._initScroll.bind(this);
        this._calculateHeight = this._calculateHeight.bind(this);
        this._calculateCurrentIndex = this._calculateCurrentIndex.bind(this);
        this.selectMenu = this.selectMenu.bind(this);
        this.selectFood = this.selectFood.bind(this);
        this.hiddenDetail = this.hiddenDetail.bind(this);
        this.changeRateType = this.changeRateType.bind(this);
        this.toggleFilterEmpty = this.toggleFilterEmpty.bind(this);
    }

    componentWillMount() {
        this.props.initialGoods()
            .then(() => {
                this._initScroll();
                this.listHeight = this._calculateHeight();
            });
    }

    componentDidUpdate() {
        if (this.state.detailShow) {
            this.detailScroll.refresh()
        }
    }

    render() {
        return (
            <div className="goods">
                <MenuList goods={this.props.goods}
                          scrollId={this.menuScollId}
                          currentIndex={this.state.currentIndex}
                          clickMenu={this.selectMenu}/>
                <FoodList goods={this.props.goods}
                          scrollId={this.foodScollId}
                          scrollItemClass={this.foodScollItemClass}
                          addFood={this.props.addFood}
                          decreaseFood={this.props.decreaseFood}
                          selectFood={this.selectFood}/>
                <ToggleShow transitionName='food-detail' ifShow={this.state.detailShow}>
                    <FoodDetail food={this.props.detailFood}
                                rateType={this.state.rateType}
                                filterEmptyRatings={this.state.filterEmptyRatings}
                                detailScrollId={this.detailScrollId}
                                detailShow={this.state.detailShow}
                                hiddenDetail={this.hiddenDetail}
                                addFood={this.props.addFood}
                                decreaseFood={this.props.decreaseFood}
                                changeRateType={this.changeRateType}
                                toggleFilterEmpty={this.toggleFilterEmpty}/>
                </ToggleShow>
            </div>
        )
    }

    _initScroll() {
        this.menuScroll = new BScroll(document.getElementById(this.menuScollId), {
            click: true
        });
        this.foodScroll = new BScroll(document.getElementById(this.foodScollId), {
            click: true,
            probeType: 3 //实时发送滚动位置
        });
        this.detailScroll = new BScroll(document.getElementById(this.detailScrollId), {
            click: true
        });
        this.foodScroll.on('scroll', (pos) => {
            let scrollY = Math.abs(Math.round(pos.y));
            let index = this._calculateCurrentIndex(scrollY);
            if (index !== this.state.currentIndex) {
                this.setState({
                    currentIndex: index
                });
            }

        })
    }

    _calculateHeight() {
        let list = document.getElementById(this.foodScollId).getElementsByClassName(this.foodScollItemClass);
        let height = 0,
            listHeight = [];
        listHeight.push(height);
        for (let i = 0; i < list.length; i++) {
            height += list[i].clientHeight
            listHeight.push(height);
        }
        return listHeight;
    }

    _calculateCurrentIndex(scrollY) {
        let listHeight = this.listHeight;
        for (let i = 0; i < listHeight.length - 1; i++) {
            if (scrollY >= listHeight[i] && scrollY < listHeight[i + 1]) {
                return i;
            }
        }
        return 0;
    }

    selectMenu(index) {
        this.foodScroll.scrollTo(0, -(this.listHeight[index]), 0.5);
        this.setState({
            currentIndex: index
        });
    }

    selectFood(id) {
        this.props.selectFood(id);
        this.setState({
            detailShow: true
        })
    }

    hiddenDetail() {
        this.setState({
            detailShow: false
        })
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
export default Goods