/** @format */

import React, { createContext, useState } from 'react'

const ToggleContext = createContext()

function Toggle({ children }) {
    const [on, setOn] = useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export default Toggle
export { ToggleContext }
