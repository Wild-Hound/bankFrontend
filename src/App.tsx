import React, { useEffect, useState } from "react";
import "./App.scss";
import SearchBar from "./Components/SearchBar";

// @ts-ignore
export const Context = React.createContext();

function App() {
  const [apiData, setApiData] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI")
      .then((res) => res.json())
      // @ts-ignore
      .then((data) => setApiData(data));
  }, []);

  return (
    <Context.Provider value={{ apiData, setApiData }}>
      <div className="App">
        <SearchBar />
      </div>
    </Context.Provider>
  );
}

export default App;
