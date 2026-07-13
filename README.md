# modal-02-07-2026
A reusable modal component built with Vanilla JavaScript, featuring dynamic DOM creation, multiple instances, and clean event handling.

# Vanilla JavaScript Modal

A reusable modal component built entirely with Vanilla JavaScript.

The modal is generated dynamically through JavaScript without any predefined HTML markup. Multiple independent modals can be created by simply calling the `setModal()` function with different content.

---

## Features

- Dynamic DOM creation
- Reusable modal component
- Multiple independent modal instances
- Open and close modal
- Close by clicking outside the modal
- Prevent accidental closing when clicking inside
- Clean separation between UI creation and behavior
- Simple and lightweight implementation

---

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

---

## Project Structure

```
index.html
style.css
script.js
```

---

## How it Works

The project is separated into two main functions.

### `createModal(text)`

Responsible for creating the modal structure:

- overlay
- modal container
- close button
- content

Returns all required DOM elements.

### `setModal(text)`

Responsible for:

- creating an "Open Modal" button
- inserting the modal into the page
- managing the open/close state
- handling user interactions

Each call creates a completely independent modal.

Example:

```javascript
setModal("Hello!");
setModal("Welcome!");
```

---

## What I Practiced

- DOM creation with JavaScript
- `document.createElement()`
- Component-like architecture
- Event listeners
- Event propagation
- `stopPropagation()`
- State management with JavaScript
- Reusable UI components
- Function decomposition
- Clean code organization

---

## Live Demo

https://nomenaharilazarandria.github.io/modal-02-07-2026/
---

## Future Improvements

- Open animation
- Close animation
- Keyboard support (Escape key)
- Focus trapping for accessibility
- Custom button labels
- Custom modal sizes
- Icons and themes
- Promise-based confirmation modal
- Fully configurable component options

---

## Author

Created by **Nomena** as part of a Vanilla JavaScript learning journey focused on building reusable UI components and improving frontend architecture.
