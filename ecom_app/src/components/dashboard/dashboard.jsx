import Navbar from "../navbar/navbar";
import ItemList from "../itemList/itemList";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const [apiData, getApiData] = useState();
  const dispatch = useDispatch();
  useEffect(async () => {
    const url = await fetch("https://fakestoreapi.com/products");
    const finalData = await url.json();
    console.log(finalData);
    getApiData(finalData);
    dispatch({ type: "testingStore", payload: finalData });
  }, []);

  return (
    <>
      <Navbar />
      <ItemList itemList={apiData} />
    </>
  );
};

export default Dashboard;
