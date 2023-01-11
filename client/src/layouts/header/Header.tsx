import LogoWeb from "../../components/logos/LogoWeb";
import { NavLink, useNavigate } from "react-router-dom";
import CartLogo from "../../components/logos/CartLogo";
import Button from "../../components/button/Button";
import "./header.scss";
import { ROUTER_PATH } from "../../routers/router";

const Header = () => {
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
        <div className="login">
          <Button
            handleClick={() => {
              navigate(ROUTER_PATH.LOGIN);
            }}
          >
            Sign in
          </Button>
        </div>
        <div className="cart h-[48px]">
          <CartLogo className=""></CartLogo>
        </div>
      </div>
    </div>
  );
};

export default Header;
