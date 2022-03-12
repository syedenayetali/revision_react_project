import style from "./itemList.module.scss";
import SingleProduct from "../singleProduct/singleProduct";
import { useSelector } from "react-redux";

const ItemList = (props) => {
  const data = props.itemList;
  useSelector((state) => console.log(state.cart));
  return (
    <div className={style.list}>
      {/* <div className={style.loader}>Loading...</div> */}
      {data ? (
        data.map((e) => <SingleProduct oneProduct={e} key={e.id} />)
      ) : (
        <div className={style.loader}></div>
      )}
    </div>
  );
};
export default ItemList;
