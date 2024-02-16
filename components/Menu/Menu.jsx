/** @format */

import React from 'react'
import Toggle from '../Toggle/index'

function Menu({ children, onOpen }) {
    return (
        <Toggle onToggle={ onOpen }>
            <div className="menu" role="menu">
                {children}
            </div>
        </Toggle>
    )
}

export default Menu
