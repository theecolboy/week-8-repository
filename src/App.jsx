import { useState } from "react";
import Layout from "./components/Layout";
import PostList from "./components/PostList";
import Button from "./components/Button";

function App() {
  return (
    <Layout>
      <h1>Welcome to CommunityHub</h1>
      <PostList />
      <div style={{ marginTop: "2rem" }}>
        <h2>Counter Demo</h2>
        <Counter />
      </div>
      <div style={{ marginTop: "2rem" }}>
        <h2>Button Examples</h2>
        <Button text="Primary Button" variant="primary" size="medium" />
        <Button text="Secondary Button" variant="secondary" size="small" />
        <Button text="Large Button" variant="primary" size="large" />
      </div>
    </Layout>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <Button
        text="Increment"
        variant="primary"
        size="medium"
        onClick={() => setCount(count + 1)}
      />
    </div>
  );
}

export default App;
