export function Image({ className, src, size }) {
  return <img className={`${className} ${size}`} src={src} alt="" />;
}
