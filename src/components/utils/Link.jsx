export function Link({ href, children, className }) {
  return (
    <a className={`text-base ${className}`} href={href}>
      {children}
    </a>
  );
}
