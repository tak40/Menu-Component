/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Menu/index'
import Toggle from './Toggle/index'
import { BsStar, BsStarFill } from 'react-icons/bs'

function App() {
    return (
        <main>
            <Toggle>
                <Toggle.Button>
                    <Toggle.On>
                        <BsStarFill className="star filled" />
                    </Toggle.On>
                    <Toggle.Off>
                        <BsStar className="star" />
                    </Toggle.Off>
                </Toggle.Button>
            </Toggle>

            <Toggle>
                <Menu>
                    <Toggle.Button>
                        <Menu.Button>Menu</Menu.Button>
                    </Toggle.Button>
                    <Toggle.On>
                        <Menu.Dropdown>
                            <Menu.Item>Home</Menu.Item>
                            <Menu.Item>About</Menu.Item>
                            <Menu.Item>Contact</Menu.Item>
                            <Menu.Item>Blog</Menu.Item>
                        </Menu.Dropdown>
                    </Toggle.On>
                </Menu>
            </Toggle>
        </main>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
