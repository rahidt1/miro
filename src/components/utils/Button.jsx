export function Button({ children, color }) {
  return (
    <a
      className={` p-3 rounded-3xl  text-center text-white mt-5 after:content-['->'] after:inline-block after:w-5 ${color}`}
      href="#"
    >
      {children}
    </a>
  );
}
