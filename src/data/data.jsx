import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const Data = ({ children }) => {
  const [data, setData] = useState([]);

  const load = () => {
    axios
      .get("http://localhost:3000/api/sections")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <DataContext.Provider value={{ data, load }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

export const reloadData = () => {
  useContext(DataContext).load();
};
