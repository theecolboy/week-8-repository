# Week 8: React Fundamentals - CommunityHub

## Author
- **Name:** Ndungu Kamande
- **GitHub:** [@theecolboy](https://github.com/theecolboy)
- **Date:** May 4, 2026

## Project Description
Built a React application demonstrating core React concepts including component composition, props, state management with useState, list rendering with map(), and creating reusable UI components. The app displays a community hub with blog posts and interactive elements.

## Technologies Used
- React 18
- Vite (build tool)
- JavaScript (ES6+)
- CSS3 (with CSS variables, Flexbox, Grid)
- Git & GitHub

## Features
- **Header Component** - Navigation bar with site branding
- **Footer Component** - Site footer with copyright
- **Layout Component** - Composition pattern using children prop
- **PostCard Component** - Displays individual post with props
- **PostList Component** - Renders array of posts using map()
- **Button Component** - Reusable button with variant (primary/secondary) and size (small/medium/large) options
- **Counter Demo** - Interactive counter demonstrating useState hook
- **Responsive Design** - Works on mobile and desktop
- **Dark Mode Support** - Automatic theme switching

## How to Run
1. Clone this repository:
   ```bash
   git clone https://github.com/theecolboy/week-8-repository.git
   cd week-8-repository
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open browser to: http://localhost:5173

OR simply open `index.html` in your browser (limited functionality without build)

## Lessons Learned
- React components are reusable building blocks that can be composed together
- Props allow data to flow from parent to child components unidirectionally
- The useState hook is essential for managing local component state
- Component composition using the children prop creates flexible layouts
- CSS variables make theming and dark mode implementation cleaner
- Key props are crucial when rendering lists for React's reconciliation

## Challenges Faced
- **Initial Setup:** Understanding Vite's project structure vs Create React App - solved by reading Vite documentation
- **Component Architecture:** Deciding between composition vs inheritance - chose composition for better flexibility
- **CSS Organization:** Managing styles across multiple components - used CSS variables and organized by component
- **Button Props:** Handling optional parameters with default values - used ES6 default parameters

## Screenshots
![Main Application View](screenshots/main-view.png)
![Post Cards](screenshots/post-cards.png)
![Button Variants](screenshots/buttons.png)

## Live Demo
Project is running locally at http://localhost:5173

---

## Repository Info
**Repository URL:** https://github.com/theecolboy/week-8-repository.git  
**Branch:** main  
**Status:** ✅ Ready for submission
