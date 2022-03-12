import style from "./navbar.module.scss";
import logo from "../../asset/logo/logo.png";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { GoDeviceMobile } from "react-icons/go";
import { ImLocation2 } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [myCartBotton, getMyCartBotton] = useState(false);

  // let cartItemCount = 0;
  let cartItemCount = useSelector((state) => state.cart.length);
  useSelector((state) => console.log(state.cart));
  console.log(cartItemCount);

  const cartItem = () => {
    {
      !myCartBotton ? getMyCartBotton(true) : getMyCartBotton(false);
    }
  };

  return (
    <div className={style.nav}>
      <img src={logo} alt="Logo" className={style.logo} />
      <p>
        <ImLocation2 className={style.location} />
        Select Location
      </p>
      <div className={style.serachDiv}>
        <input className={style.inputBox} />
        <BsSearch className={style.searchIcon} />
      </div>
      <p>login</p>
      <p className={style.myCart} onClick={cartItem}>
        my Cart
        <RiShoppingCart2Fill className={style.cart} />
        {cartItemCount}
      </p>
      {myCartBotton && (
        <div className={style.cartSlider}>
          <h3>jghj</h3>
        </div>
      )}

      <p className={style.phoneDiv}>
        <GoDeviceMobile className={style.phone} />
        Get Mobile App
      </p>
    </div>
  );
};
export default Navbar;
