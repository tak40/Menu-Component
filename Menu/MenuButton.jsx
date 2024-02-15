/** @format */

import React from 'react'
import Button from '../Button/Button'

function MenuButton({ children }) {
    return (
        <Button aria-expanded={open} aria-haspopup="true">
            {children}
        </Button>
    )
}

export default MenuButton
