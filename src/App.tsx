import React, { useEffect, useState } from "react";
import "./App.scss";
import BanksTable from "./Components/BanksTable/BanksTable";
import SearchBar from "./Components/SearchBar/SearchBar";

// @ts-ignore
export const Context = React.createContext();

function App() {
  const [apiData, setApiData] = useState<any[]>([]);
  const [tableData, setTableData] = useState<any[]>([]);
  const [favoriteBanks, setFavoriteBanks] = useState([]);

  useEffect(() => {
    fetch("https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI")
      .then((res) => res.json())
      // @ts-ignore
      .then((data) => setApiData(data));
    // @ts-ignore
    const banks = JSON.parse(localStorage.getItem("favoriteBanks"));
    // @ts-ignore
    setFavoriteBanks(banks);
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteBanks", JSON.stringify(favoriteBanks));
  }, [favoriteBanks]);

  return (
    <Context.Provider
      value={{
        apiData,
        setApiData,
        tableData,
        setTableData,
        favoriteBanks,
        setFavoriteBanks,
      }}
    >
      <div className="App">
        <SearchBar />
        <BanksTable />
      </div>
    </Context.Provider>
  );
}

export default App;
