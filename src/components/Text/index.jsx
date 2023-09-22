const Text = ({ children, variant }) => {
  return <span style={{ color: `var(--${variant}-color)` }}>{children}</span>;
};

export default Text;
