import React, {Component} from "react"
import SupportIcon from '../supportIcon/SupportIcon'
import Description from './Description'
import Split from '../split/Split'
import './seller.sass'
import BScroll from 'better-scroll'
import {setLocalValue, getLocalValue} from '../../common/js/localStore'

const FAVORITE = 'favorite';

class Seller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: false
        }
        this.toggleFavorite = this.toggleFavorite.bind(this);
    }

    componentDidMount() {
        this.scroll = new BScroll(document.getElementById('seller-scroll'), {
            click: true
        });
        this.picScroll = new BScroll(document.getElementById('pic-scroll'), {
            scrollX: true,
            eventPassthrough: 'vertical'
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.seller.id) {
            this.setState({
                favorite: getLocalValue(nextProps.seller.id, FAVORITE, false)
            })
        }
    }

    componentDidUpdate() {
        //计算横向滚动图片ul的宽度，以应用scroll
        if (this.props.seller.pics) {
            let el = document.getElementById('pic-scroll').firstChild;
            let marginright = 6;
            let marginleft = 18;
            let picwidth = 120
            let width = (picwidth + marginright) * this.props.seller.pics.length + marginleft * 2 - marginright;
            el.style.width = width + 'px';
        }
        this.scroll.refresh();
        this.picScroll.refresh();
    }

    render() {
        const seller = this.props.seller;
        return (
            <div className="seller-wrapper" id='seller-scroll'>
                <div className="for-scroll">
                    <div className="overview">
                        <Description seller={seller} favorite={this.state.favorite}
                                     toggleFavorite={this.toggleFavorite}/>
                    </div>
                    <Split/>
                    <div className="bulletin-wrapper">
                        <h2 className="title">公告与活动</h2>
                        <p className="text">{seller.bulletin}</p>
                        <ul className="supports">
                            {seller.supports.map(support =>
                                <li className="support" key={support.description}>
                                    <div className="support-icon">
                                        <SupportIcon supportType={support.type} type='4'/>
                                    </div>
                                    <span className="description">{support.description}</span>
                                </li>
                            )}

                        </ul>
                    </div>
                    <Split/>
                    <div className="pics-wrapper">
                        <h2 className="title">商家实景</h2>
                        <div id="pic-scroll">
                            <ul>
                                {seller.pics.map((pic, index) =>
                                    <li className="pic-item" key={index}>
                                        <img src={pic} width="120px" height="90px" className="pic"/>
                                    </li>
                                )}

                            </ul>
                        </div>
                    </div>
                    <Split/>
                    <div className="info-wrapper">
                        <h2 className="title">商家信息</h2>
                        <ul>
                            {seller.infos.map((info, index) =>
                                <li className="info" key={index}>
                                    {info}
                                </li>
                            )}

                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    toggleFavorite() {
        this.setState({
            favorite: !this.state.favorite
        })
        setLocalValue(this.props.seller.id, FAVORITE, !this.state.favorite)
    }
}

export default Seller