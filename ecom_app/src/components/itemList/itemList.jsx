import style from "./itemList.module.scss";
import SingleProduct from "../singleProduct/singleProduct";

const ItemList = (props) => {
  const data = props.itemList;
  console.log(data);
  return (
    <div className={style.list}>
      {/* <div className={style.loader}>Loading...</div> */}
      {data ? (
        data.map((e) => <SingleProduct oneProduct={e} key={e.id} />)
      ) : (
        <div className={style.loader}>Loading...</div>
      )}
    </div>
  );
};
export default ItemList;
