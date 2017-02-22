/**
 * Created by chipanda on 2016/12/26.
 */
import '../css/ballfly.sass'

const setPosition = (ball, inner, delta) => {
    const prefixes = [
        '-webkit-',
        '-moz-',
        '-ms-',
        '-o-',
        '',
    ]

    prefixes.forEach(prefix => {
        ball.style.setProperty(`${prefix}transform`, `translate3d(${delta.left}px, 0, 0)`)
        inner.style.setProperty(`${prefix}transform`, `translate3d(0 ,${delta.top}px, 0)`)
    })
}
export default function ($event, target) {
    if (!target || !$event.currentTarget) {
        return Promise.reject(false)
    }
    if (typeof target.left === 'undefined' || typeof target.top === 'undefined') {
        return Promise.reject(false)
    }

    let startPosition = $event.currentTarget.getBoundingClientRect()
    let endPosition = target
    //抛物线分解为横纵两个方向的位移
    // ball控制横向移动，inner纵向移动，ball为外层wrapper，inner为球
    let ball = document.createElement('div')
    let inner = document.createElement('div')
    ball.classList.add('flyball')
    inner.classList.add('inner')
    inner.style.width = 24 + 'px'
    inner.style.height = 24 + 'px'

    ball.style.top = startPosition.top + 'px'
    ball.style.left = startPosition.left + 'px'

    ball.appendChild(inner)
    document.body.appendChild(ball)

    let delta = {
        top: endPosition.top - startPosition.top,
        left: endPosition.left - startPosition.left,
    }
    //强制页面重绘
    void ball.clientHeight

    setPosition(ball, inner, delta)

    return new Promise((resolve) => {
        inner.addEventListener('transitionend', () => {
            document.body.removeChild(ball)
            resolve(true)
        })
    })
}
