import { useDispatch } from "react-redux";
import style from "./singleProduct.module.scss";

const SingleProduct = (props) => {
  const product = props.oneProduct;
  const dispatch = useDispatch();
  console.log("test");

  const addToCart = () => {
    dispatch({ type: "AddToCart", payload: product });
  };

  return (
    <div className={style.card}>
      <h3 className={style.title}>{product.title}</h3>
      <p className={style.category}>{product.category}</p>
      <img src={product.image} alt={product.title} className={style.image} />
      {/* <p>{product.description}</p> */}
      <div className={style.cartBottonNprice}>
        <h4 className={style.addToCart} onClick={addToCart}>
          Add To Cart
        </h4>
        <h4 className={style.price}>₹{(product.price * 72).toFixed(2)}</h4>
      </div>
    </div>
  );
};
export default SingleProduct;
