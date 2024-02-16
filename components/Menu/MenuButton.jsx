/** @format */

import React from 'react'
import Button from '../Button/Button'
import Toggle from '../Toggle/index'

function MenuButton({ children }) {
    return (
        <Toggle.Button>
            <Button aria-expanded={open} aria-haspopup="true">
                {children}
            </Button>
        </Toggle.Button>
    )
}

export default MenuButton
