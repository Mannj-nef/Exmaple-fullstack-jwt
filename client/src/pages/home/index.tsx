import { NavLink } from "react-router-dom";
import "./home.scss";
import Search from "../../components/search/Search";
import { ROUTER_PATH } from "../../routers/router";

const HomePage = () => {
  return (
    <>
      <div className="hero">
        <div className="content">
          <img src="/Hungry_.png" alt="" />
          <h1 className="content-title">Wait a minute for delicious.</h1>
          <p className="content-description">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 20mins.
          </p>
          <Search></Search>
          <p className="content-bottom">
            Already member of our communty?{" "}
            <NavLink className="link" to={ROUTER_PATH.RESGITER}>
              Sign up
            </NavLink>
          </p>
        </div>
        <div className="image">
          <img className="" src="/Content.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
