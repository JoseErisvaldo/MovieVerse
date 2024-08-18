import { useState, useEffect } from "react";

export default function Alert({ text, type,icon }) {
  const [background, setBackground] = useState('blue');
  const [color, setColor] = useState('white');

  useEffect(() => {
    switch(type) {
      case 'error':
        setBackground('red');
        setColor('white');
        break;
      case 'success':
        setBackground('green');
        setColor('white');
        break;
      case 'warning':
        setBackground('yellow');
        setColor('black');
        break;
      default:
        setBackground('blue');
        setColor('white');
        break;
    }
  }, [type]);

  const alertStyle = {
    backgroundColor: background,
    color: color,
    padding: '1rem',
    borderRadius: '0.375rem'
  };

  return (
    <div style={alertStyle} className="flex items-center gap-2">
      {type === "success" ? <div className="animate-spin">{icon}</div> : <></>}
      <div>{text}</div>
    </div>
  );
}
