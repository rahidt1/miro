export function Button({ children }) {
  return (
    <a
      className={`bg-blue-500 p-3 rounded-3xl  text-center text-white mt-5 after:content-['->'] after:inline-block after:w-5 `}
      href="#"
    >
      {children}
    </a>
  );
}
