import React, {Component} from "react"
import SupportIcon from "../supportIcon/SupportIcon"
import './menuList.sass'

const MenuList = ({goods, scrollId,currentIndex,clickMenu}) => {
    return (
        <div className="menu-wrapper" id={scrollId}>
            <ul className="menu">
                {goods.map(function (category, index) {
                    let currentClass = index === currentIndex ? "menu-item current" : "menu-item";
                    return (
                        <li className={currentClass} key={index} onClick={()=>clickMenu(index)}>
                                    <span className="text border-1px">
                                        {
                                            category.type >= 0 ?
                                                <SupportIcon supportType={category.type} type="3"/> : null
                                        }
                                        {
                                            category.name
                                        }
                                    </span>
                        </li>)
                })}
            </ul>
        </div>
    )
}
//}
export default MenuList