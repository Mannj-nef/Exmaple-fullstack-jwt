import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import { RootState } from "../../redux/store";
import {
  deleteUser,
  getUserById,
  isOpenModalUpdate,
} from "../../redux/users/userSlice";

interface user {
  _id: string;
  name?: string;
  avatarULR?: string;
  role: "admin" | "user";
}

interface Iuser {
  user: user;
}

const UserItem = ({ user }: Iuser) => {
  const dispatch = useDispatch();
  const { users, loading, isUpdateUser, idUser } = useSelector(
    (state: RootState) => state.userSlice
  );

  const handleOpenUpdateUser = (id: string) => {
    dispatch(getUserById(id));
    dispatch(isOpenModalUpdate(true));
  };
  const handleDeleteUser = (id: string) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="user-item">
      <img
        className="user-image"
        src={user?.avatarULR || "/Content.png "}
        alt=""
      />
      <div className="user-bottom">
        <h4 className="user-name">{user?.name || "mQuan"}</h4>
        <p>Role: {user?.role || "admin"}</p>
        <div className="flex justify-between mt-5">
          <Button
            className="bg-green-500"
            handleClick={() => handleOpenUpdateUser(user._id)}
          >
            Update
          </Button>
          <Button
            className="bg-red-500"
            handleClick={() => handleDeleteUser(user._id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
