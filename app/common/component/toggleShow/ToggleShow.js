import React, {Component, PropTypes} from 'react'

//有props.children且个数为一，无内联样式
class ToggleShow extends Component {
    componentDidMount() {
        if (!this.props.ifShow) {
            this.wrapper.firstChild.style.setProperty('display', 'none');
        }
    }

    //动画所用的class为 example-enter, example-enter-active, example-leave, example-leave-active
    componentWillReceiveProps(nextProps) {
        if (nextProps.ifShow !== this.props.ifShow) {
            let animationChild = this.wrapper.firstChild;
            if (nextProps.ifShow) {
                let enterClassName = this.props.transitionName + '-enter',
                    enterActiveClassName = this.props.transitionName + '-enter-active'
                animationChild.setAttribute('style', '');
                animationChild.classList.add(enterClassName);
                //下一帧中添加active的class才能触发动画
                void animationChild.clientHeight;

                animationChild.classList.add(enterActiveClassName)
                //在duration指定的时间后，移除动画用的class
                setTimeout(() => {
                    animationChild.classList.remove(enterClassName, enterActiveClassName)
                }, this.props.enterDuration)

            } else {
                let leaveClassName = this.props.transitionName + '-leave',
                    leaveActiveClassName = this.props.transitionName + '-leave-active';
                animationChild.classList.add(leaveClassName);
                void animationChild.clientHeight;
                animationChild.classList.add(leaveActiveClassName);
                setTimeout(() => {
                    animationChild.classList.remove(leaveClassName, leaveActiveClassName)
                    animationChild.style.setProperty('display', 'none');
                }, this.props.leaveDuration)

            }
        }
    }

    render() {
        return (
            <span ref={(wrapper) => this.wrapper = wrapper}>{this.props.children}</span>
        )
    }
}
ToggleShow.propTypes = {
    ifShow: PropTypes.bool,
    transitionName: PropTypes.string,
    enterDuration: PropTypes.number,
    leaveDuration: PropTypes.number
}
ToggleShow.defaultProps = {
    ifShow: false,
    transitionName: 'example',
    enterDuration: 500,
    leaveDuration: 500
}

export default ToggleShow