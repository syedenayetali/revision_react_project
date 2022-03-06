import style from "./navbar.module.scss";
import logo from "../../asset/logo/logo.png";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { GoDeviceMobile } from "react-icons/go";
import { ImLocation2 } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [myCartBotton, getMyCartBotton] = useState(false);
  const cartItem = () => {
    // if (!myCartBotton) {
    //   getMyCartBotton(true);
    // } else {
    //   getMyCartBotton(false);
    // }
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
      </p>
      {myCartBotton && (
        <div className={style.cartSlider}>
          <h3>jghj</h3>
        </div>
      )}

      <p>
        <GoDeviceMobile className={style.phone} />
        Get App
      </p>
    </div>
  );
};
export default Navbar;
