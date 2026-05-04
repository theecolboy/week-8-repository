function PostCard({ title, excerpt, author, date }) {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <small>
        By {author} | {date}
      </small>
    </div>
  );
}

export default PostCard;
