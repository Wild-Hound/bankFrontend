import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../App";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const [inputVal, setInputVal] = useState("");
  const [matchedResults, setMatchedResults] = useState<any[]>([]);

  // @ts-ignore
  const { apiData, setTableData } = useContext(Context);

  useEffect(() => {
    setTableData([...apiData]);
  }, [apiData]);

  useEffect(() => {
    inputVal.length === 0 && setTableData([...apiData]);
  }, [inputVal]);

  useEffect(() => {
    // @ts-ignore
    setTableData([...matchedResults]);
  }, [matchedResults]);

  function searchBoxAct() {
    if (inputVal.length >= 3) {
      const tempArr: any = [];
      apiData?.forEach((data: any) => {
        if (
          (data.branch as string).toLowerCase().startsWith(inputVal) ||
          (data.address as string).toLowerCase().includes(inputVal) ||
          (data.city as string).toLowerCase().startsWith(inputVal) ||
          (data.district as string).toLowerCase().includes(inputVal) ||
          (data.bank_name as string).toLowerCase().includes(inputVal)
        ) {
          tempArr.push(data);
        }
      });
      setMatchedResults([...tempArr]);
    }
  }

  return (
    <div className={styles.searchBarWrapper}>
      <input
        type="text"
        placeholder="Search Banks"
        onChange={(e) => setInputVal(e.target.value.toLowerCase())}
        onKeyPress={(e) => {
          e.key === "Enter" && searchBoxAct();
        }}
        value={inputVal}
      />
    </div>
  );
};

export default SearchBar;
