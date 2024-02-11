/** @format */

import React, { useState, createContext, useId } from 'react'

const MenuContext = createContext()

export default function Menu({ children }) {
    const [open, setOpen] = useState(true)
    const menuId = useId()

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <MenuContext.Provider value={{ open, toggle, menuId }}>
            <div className="menu" role="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export { MenuContext }
