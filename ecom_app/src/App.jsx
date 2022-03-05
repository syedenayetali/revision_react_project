// import style from "./App.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/navbar/navbar";
import ItemList from "./components/itemList/itemList";

function App() {
  const [apiData, getApiData] = useState();

  useEffect(async () => {
    const url = await fetch("https://fakestoreapi.com/products");
    const finalData = await url.json();
    getApiData(finalData);
    console.log(finalData);
    dispatch({ type: "testingStore", payload: finalData });
  }, []);

  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <ItemList itemList={apiData} />
    </div>
  );
}

export default App;
