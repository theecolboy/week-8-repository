import PostCard from "./PostCard";

function PostList() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React...",
      author: "John Doe",
      date: "Jan 15, 2026",
    },
    {
      id: 2,
      title: "JavaScript Tips",
      excerpt: "Write cleaner JS code...",
      author: "Jane Smith",
      date: "Jan 10, 2026",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
}

export default PostList;
