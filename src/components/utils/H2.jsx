export function H2({ children, className }) {
  return (
    <h2 className={`text-lg text-slate-900 font-bold mb-6 ${className}`}>
      {children}
    </h2>
  );
}
