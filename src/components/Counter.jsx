import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Compteur</h2>
      <p>Valeur actuelle : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        Décrémenter
      </button>
    </div>
  );
};

export default Counter;
