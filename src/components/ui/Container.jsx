export default function Container({ className = "", children }) {
  return <div className={`mx-auto w-full px-4 sm:px-6 lg:px-20 ${className}`}>{children}</div>;
}
