import LogoWeb from "../../components/logos/LogoWeb";
import { NavLink, useNavigate } from "react-router-dom";
import CartLogo from "../../components/logos/CartLogo";
import Button from "../../components/button/Button";
import "./header.scss";
import { ROUTER_PATH } from "../../routers/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { getUser, setLogOut } from "../../redux/users/authSlice";

const Header = () => {
  const { user } = useSelector((state: RootState) => state.authSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-item">
        <div
          className="logo"
          onClick={() => {
            navigate(ROUTER_PATH.HOME);
          }}
        >
          <LogoWeb></LogoWeb>
          <h3 className="logo-title">Besnik</h3>
        </div>
      </div>
      <div className="header-item">
        <ul className="menu">
          <li className="menu-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/user">Users</NavLink>
          </li>
        </ul>
      </div>
      <div className="header-item header-right">
        {user ? (
          <>
            <Button
              handleClick={() => {
                navigate(ROUTER_PATH.HOME);
              }}
            >
              {user.name}
            </Button>
            <Button
              handleClick={() => dispatch(setLogOut())}
              className="bg-orange-500"
            >
              Log out
            </Button>
          </>
        ) : (
          <div className="login">
            <Button
              handleClick={() => {
                navigate(ROUTER_PATH.LOGIN);
              }}
            >
              Sign in
            </Button>
          </div>
        )}
        <div className="cart h-[48px]">
          <CartLogo className=""></CartLogo>
        </div>
      </div>
    </div>
  );
};

export default Header;
