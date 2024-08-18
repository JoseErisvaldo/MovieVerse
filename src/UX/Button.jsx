

export default function Button({background,color, onClick,text}) {
  return (
    <button 
      onClick={onClick}
      style={{
        background: background,
        color: color,
        }}
      className="w-full p-2 border rounded">
      {text}
    </button>
  )
}