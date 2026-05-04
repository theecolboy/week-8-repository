# Week 8 - React Fundamentals

A React application demonstrating core concepts: components, props, state, composition, and reusable UI elements.

## Features

- **Component Composition**: Layout pattern with Header, Footer, and main content area
- **Props**: PostCard component receives data from parent
- **Lists & Mapping**: PostList renders an array of posts using map()
- **State Management**: Counter component demonstrating useState hook
- **Reusable UI**: Button component with variants (primary/secondary) and sizes (small/medium/large)

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Navigation header
│   ├── Footer.jsx       # Site footer
│   ├── Layout.jsx       # Composition wrapper
│   ├── PostCard.jsx     # Individual post display
│   ├── PostList.jsx     # Posts array + map
│   └── Button.jsx       # Reusable button component
├── App.jsx              # Main application with Counter
├── main.jsx             # React entry point
└── index.css            # Global styles
```

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:5173 to view the app.

## Key Concepts Covered

1. **JSX** - HTML-like syntax in JavaScript
2. **Components** - Function components as building blocks
3. **Props** - Passing data from parent to child
4. **Lists** - Rendering arrays with .map()
5. **Composition** - Layout pattern with children prop
6. **useState** - State management for interactive UI
7. **Events** - onClick handlers

## Extension Ideas

- Add a "Create Post" form
- Implement "Like" button functionality
- Add "Delete post" feature
- Connect to a backend API
- Add routing with React Router

## Tech Stack

- React 18
- Vite
- CSS (no frameworks)

## License

MIT
