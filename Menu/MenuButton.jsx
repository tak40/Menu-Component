/** @format */

import React, { useContext } from 'react'
import Button from '../Button/Button'
import { MenuContext } from './Menu'

export default function MenuButton({ children }) {
    const { toggle, open, menuId } = useContext(MenuContext)
    return (
        <Button
            onClick={toggle}
            aria-expanded={open}
            aria-haspopup="true"
            aria-controls={menuId}
        >
            {children}
        </Button>
    )
}
