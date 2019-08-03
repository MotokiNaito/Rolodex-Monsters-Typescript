import React, { FC, useState, useEffect } from "react";
import axios from "axios";

import CardList from "./components/card-list/card-list.component";

import "./App.css";

type IMonsters = [];

const App: FC = () => {
  const [monsters, setMonsters] = useState<IMonsters>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setMonsters(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <CardList monsters={monsters} />
    </div>
  );
};

export default App;
