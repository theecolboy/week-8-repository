# Week 8 Submission - React Fundamentals

**Student Name:** Ndungu Kamande  
**GitHub Repository:** https://github.com/theecolboy/week-8-repository.git  
**Live Demo:** http://localhost:5173  

---

## 📋 Assignment Checklist

✅ Component Composition (Layout pattern)  
✅ Props implementation (PostCard)  
✅ Lists + Array Mapping (PostList)  
✅ useState Hook (Counter component)  
✅ Reusable Button Component (variants & sizes)  
✅ Professional CSS Styling  
✅ Project pushed to GitHub  

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation bar
│   ├── Footer.jsx          # Site footer
│   ├── Layout.jsx          # Composition wrapper (children prop)
│   ├── PostCard.jsx        # Individual post with props
│   ├── PostList.jsx        # Posts array + map() rendering
│   └── Button.jsx          # Reusable button component
├── App.jsx                 # Main app with Counter & Button demos
├── main.jsx               # Entry point
└── index.css              # Complete styling
```

---

## 🎯 Key Concepts Demonstrated

### 1. JSX
```jsx
function Header() {
  return (
    <header className="header">
      <h1>CommunityHub</h1>
    </header>
  );
}
```

### 2. Components
- **Function Components** - All 6 components are functional
- **Single Responsibility** - Each component does one thing well

### 3. Props (Data Passing)
```jsx
<PostCard
  key={post.id}
  title={post.title}
  excerpt={post.excerpt}
  author={post.author}
  date={post.date}
/>
```

### 4. Lists & Mapping
```jsx
{posts.map((post) => (
  <PostCard key={post.id} {...post} />
))}
```

### 5. Composition (Layout Pattern)
```jsx
function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
```

### 6. useState Hook
```jsx
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>
  Count: {count}
</button>
```

### 7. Reusable Button with Defaults
```jsx
<Button
  text="Primary"
  variant="primary"
  size="medium"
/>
```

---

## 🚀 Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit
http://localhost:5173
```

---

## 📸 Features Showcase

### Header
- Site branding + navigation
- Responsive flexbox layout

### Footer
- Copyright information
- Sticky bottom placement

### PostCard
- Card-based design with hover effects
- Displays title, excerpt, author, date
- Shadow & border styling

### PostList
- Grid layout for cards
- Dynamic rendering from array
- Key prop for React optimization

### Button Component
- 2 variants: `primary`, `secondary`
- 3 sizes: `small`, `medium`, `large`
- onClick support
- Hover animations

### Counter Demo
- useState implementation
- Increment functionality
- Interactive button

---

## 🎨 Styling Highlights

- **CSS Variables** for theming
- **Dark mode** support (automatic)
- **Responsive** design (mobile-friendly)
- **Hover effects** on cards & buttons
- **Grid layout** for post list
- **Modern** spacing & typography

---

## 📦 Technologies Used

| Tool | Purpose |
|------|---------|
| React 18 | UI Library |
| Vite | Build Tool |
| CSS | Styling |
| Git | Version Control |

---

## ✅ Submission Confirmation

- [x] Code follows React best practices
- [x] Components are reusable and modular
- [x] Props used correctly
- [x] useState implemented
- [x] Clean, professional styling
- [x] Committed with meaningful message
- [x] Pushed to GitHub repository

---

## 🔜 Next Steps (Week 9 Prep)

- Add routing with React Router
- Create Post form (form handling)
- Like button functionality
- Delete post feature
- Connect to backend API

---

**Project completed and submitted for Week 8 - React Fundamentals**
