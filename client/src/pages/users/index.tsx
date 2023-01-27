import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getAllUser } from "../../redux/users/userSlice";
import ModalUpdateUser from "./ModalUpdateUser";
import UserItem from "./UserItem";
import "./user.scss";

const UsersPage = () => {
  const { token } = useSelector((state: RootState) => state.authSlice);
  const { users, isUpdateUser } = useSelector(
    (state: RootState) => state.userSlice
  );

  const dispatch: Dispatch<AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(getAllUser(token));
  }, [dispatch, token]);

  useEffect(() => {
    document.title = "Users Page";
  }, []);

  return (
    <div className="user-page">
      <h1 className="title">User list</h1>

      <div className="user-list">
        {users.length > 0 &&
          users.map((user) => (
            <UserItem key={user?._id} user={user}></UserItem>
          ))}
      </div>

      {isUpdateUser ? <ModalUpdateUser /> : null}
    </div>
  );
};

export default UsersPage;
