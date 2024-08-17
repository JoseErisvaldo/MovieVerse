
export default function Container({ children }) {
  return (
    <div className="container mx-auto p-4 border rounded">
      {children}
    </div>
  );
}