import React, { useState, useEffect } from "react";
import "./App.css";

interface IMonsters {
  name: string;
  type: number;
}

const App: React.FC = () => {
  const [monsters, setMonsters] = useState<IMonsters[]>([{ name: "motoki", type: 1 }, { name: "zomebie", type: 2 }]);

  return (
    <div className="App">
      {monsters.map(monster => (
        <h1 key={monster.type}>{monster.name}</h1>
      ))}
    </div>
  );
};

export default App;
