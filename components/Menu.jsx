import React from 'react'
import Menu from './Menu/Menu'

function Menu() {
    return (
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
    )
}

export default Menu