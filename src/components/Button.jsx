function Button({
  text = "Click me",
  variant = "primary",
  size = "medium",
  onClick,
}) {
  return (
    <button className={`btn ${variant} ${size}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
