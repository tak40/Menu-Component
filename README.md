# React Dropdown Menu with Context API

This project is an implementation of a dropdown menu using React, focusing on advanced patterns and practices to manage state and component relationships. It was developed as part of my journey through the [Scrimba Advanced React section](https://scrimba.com/learn/frontend/menu-component-intro-co118495ca9f1040236805ee1), specifically the tutorial on creating a menu component.

## Table of Contents
- [Key Learning Outcomes](#key-learning-outcomes)
- [The Bigger Picture](#the-bigger-picture)
- [Features](#features)
- [Accessibility Enhancements](#accessibility-enhancements)
  - [Key Accessibility Features](#key-accessibility-features)
- [Using Dot Syntax for Cleaner Imports](#using-dot-syntax-for-cleaner-imports)
- [Reflection](#reflection)
- [Quick Start](#quick-start)
- [About Scrimba](#about-scrimba)

## Key Learning Outcomes

Through this project, I delved into three crucial React concepts that every frontend developer should master:

1. **Compound Components**: Learned how to structure components in a way that leverages their natural hierarchy for simpler state and logic sharing.

2. **React.Children API**: Gained insights on manipulating `props.children` for dynamic component rendering, providing a flexible way to handle unknown component children.

3. **React Context**: Mastered the use of Context API to avoid prop drilling, enabling a cleaner and more efficient state management across the component tree.

## The Bigger Picture

The overarching goal of this exercise was to explore advanced React techniques to:
- Avoid prop drilling, ensuring a cleaner and more maintainable codebase.
- Enhance my familiarity with "the React way" of building applications, focusing on component composition and state management.

## Features

- **Dynamic Dropdown Menu**: Interactive dropdown showcasing a list of sports.
- **Efficient State Management**: Utilizes React's Context API to manage the open/close state of the menu, demonstrating an advanced pattern to eliminate prop drilling.
- **Component Composition**: Showcases the use of compound components and the React.Children API to build a flexible and maintainable component hierarchy.

## Accessibility Enhancements

As part of the tutorial on creating a React Dropdown Menu, I learned to integrate several ARIA (Accessible Rich Internet Applications) attributes to make our component more accessible. This inclusion ensures that the dropdown menu is usable and navigable for users relying on assistive technologies, reflecting the tutorial's commitment to teaching inclusive web development practices.

### Key Accessibility Features

- **`role="menu"`**: This attribute assigns a semantic role to the dropdown, making it identifiable to screen readers as a menu, enhancing the component's usability for visually impaired users.

- **`aria-expanded`**: It communicates the open or closed state of the dropdown menu to assistive technologies, providing crucial visibility information to users.

- **`aria-haspopup="true"`**: This indicates that activating the button associated with the dropdown will open a popup menu, setting clear expectations for user interaction.

- **`aria-hidden`**: Manages how the dropdown content is perceived by assistive technologies, ensuring that content not meant to be seen is not announced by screen readers.

- **`aria-controls` and Menu ID**: Through the `aria-controls` attribute and a unique menu ID, a direct relationship between the dropdown button and its content is established. This approach improves navigation for users of assistive technologies by clearly defining how elements of the UI interact.

Integrating these features was a crucial part of the learning experience, underlining the importance of accessibility in web development. This knowledge not only enhances the usability of the projects we build but also aligns with the broader goal of making the web accessible to everyone.


### Using Dot Syntax for Cleaner Imports

In `Menu/index.js`, we import each component and attach it to the `Menu` object, allowing us to export a single `Menu` namespace containing all related components.

```javascript
// Menu/index.js

import MenuButton from './MenuButton'
import MenuDropdown from './MenuDropdown'
import MenuItem from './MenuItem'

const Menu = {}
Menu.Button = MenuButton
Menu.Dropdown = MenuDropdown
Menu.Item = MenuItem

export default Menu
```

This pattern allows us to import and use the `Menu` components with a clear and concise syntax in `index.jsx`:

```jsx
// index.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Menu'

function App() {
    const sports = ['Tennis', 'Racquetball', 'Pickleball', 'Squash']
    return (
        <Menu>
            <Menu.Button>Sports</Menu.Button>
            <Menu.Dropdown>
                {sports.map(sport => (
                    <Menu.Item key={sport}>{sport}</Menu.Item>
                ))}
            </Menu.Dropdown>
        </Menu>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

By using this structure, we keep our import statements tidy and our component usage intuitive, resulting in a more readable and maintainable codebase.

## Reflection

Reflecting on this project, it stands as a significant milestone in my learning journey with React. The tutorial from Scrimba allowed me to explore advanced patterns and practices not only in state management and component structuring but also in creating more readable and maintainable code with techniques like dot syntax for component imports. Additionally, the emphasis on accessibility has underscored the importance of building inclusive web applications, ensuring they are navigable and usable for all users. These insights have been instrumental in enhancing my technical skills and shaping my approach to frontend development.


## Quick Start:

```
$ npm install
$ npm start
````

Head over to https://vitejs.dev/ to learn more about using vite

## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!
