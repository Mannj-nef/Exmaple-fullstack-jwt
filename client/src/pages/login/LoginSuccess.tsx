import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { ROUTER_PATH } from "../../routers/router";
import "./login.scss";

const LoginSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="login-success">
      <div className="login-wrapper">
        <h1 className="title">Đăng nhập thành công</h1>
        <Button
          className="btn-login-success"
          handleClick={() => navigate(ROUTER_PATH.HOME)}
        >
          Quay trở lại trang chủ
        </Button>
      </div>
    </div>
  );
};

export default LoginSuccess;
