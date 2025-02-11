import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import UserData from "./components/UserData/UserData";

function App() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <>
      {allData.map((singleData) => (
        <UserData key={singleData.id} singleData={singleData}></UserData>
      ))}
    </>
  );
}

export default App;
