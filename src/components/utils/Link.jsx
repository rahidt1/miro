export function Link({ href, children, className }) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
