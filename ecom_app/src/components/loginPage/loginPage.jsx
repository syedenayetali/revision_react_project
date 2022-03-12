import { useState } from "react";
import style from "./loginPage.module.scss";

const LoginPage = () => {
  const [login, getLogin] = useState(false);
  const loginRegisterClicked = () => {
    {
      login ? getLogin(false) : getLogin(true);
    }
  };

  return (
    <div className={style.lpDiv}>
      <table className={style.table}>
        <tr>
          <td className={style.firstColumn}>
            <h1>
              Best Deals<br></br> On Your<br></br>Finger Tip
            </h1>
          </td>
          <td className={style.secondColumn}>
            <div className={style.signinRegister}>
              <p className={style.register} onClick={loginRegisterClicked}>
                Sign-Up/Register
              </p>
              <p className={style.signin} onClick={loginRegisterClicked}>
                Sign-In
              </p>
            </div>
            {login ? (
              <form>
                <p>Username</p>
                <input />
                <p>Password</p>
                <input />
                <h4>Forget Password</h4>
                <button type="sumit">Submit</button>
              </form>
            ) : (
              <form>
                <p>Your emailID</p>
                <input />
                <p>Your password</p>
                <input />
                <p> </p>
                <button type="sumit">Register</button>
              </form>
            )}
          </td>
        </tr>
      </table>
    </div>
  );
};
export default LoginPage;
