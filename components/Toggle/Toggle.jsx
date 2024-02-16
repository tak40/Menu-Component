/** @format */

import React, { createContext, useState, useEffect, useRef } from 'react'

const ToggleContext = createContext()

function Toggle({ children, onToggle = () => {}) {
    const [on, setOn] = useState(false)
    const firstRender = useRef(true)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else {
            onToggle(on)
        }
    }, [on])

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export default Toggle
export { ToggleContext }
