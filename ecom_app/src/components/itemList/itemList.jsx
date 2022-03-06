import { useState } from "react";
import { useSelector } from "react-redux";
import style from "./itemList.module.scss";
import SingleProduct from "../singleProduct/singleProduct";

const ItemList = (props) => {
  const data = props.itemList;
  console.log(data);
  return (
    <div className={style.list}>
      {data && data.map((e) => <SingleProduct oneProduct={e} />)}
    </div>
  );
};
export default ItemList;
