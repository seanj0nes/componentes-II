import React, { useState } from 'react';

export default function App() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hiciste click {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Hace click acá
      </button>
    </div>
  );
}