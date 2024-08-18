export default function Input({placeholder, type, value, onChange,background,color }) {
  return (
    <div className="mb-4">
      <input
      placeholder={placeholder} style={{background:background, color:color}}
        className="w-full p-2 rounded border "
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
} 