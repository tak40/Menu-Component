/** @format */

import React, { useContext } from 'react'
import { ToggleContext } from './Toggle'

function ToggleOn({ children }) {
    const { on } = useContext(ToggleContext)

    return on ? children : null
}

export default ToggleOn