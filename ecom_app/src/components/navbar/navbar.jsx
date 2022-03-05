import style from "./navbar.module.scss";
import logo from "../../asset/logo/logo.png";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { GoDeviceMobile } from "react-icons/go";
import { ImLocation2 } from "react-icons/im";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
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
      <p className={style.myCart}>
        my Cart
        <RiShoppingCart2Fill className={style.cart} />
      </p>
      <p>
        <GoDeviceMobile className={style.phone} />
        Get App
      </p>
    </div>
  );
};
export default Navbar;
