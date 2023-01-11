import React from "react";
import Button from "../../components/button/Button";

interface user {
  name: string;
  role: ["admin" | "user"];
}

interface Iuser {
  user: user;
}

const UserItem = ({ user }: Iuser) => {
  const handleUpdateUser = () => {};
  const handleDeleteUser = () => {};

  return (
    <div className="user-item">
      <img className="user-image" src="/Content.png" alt="" />
      <div className="user-bottom">
        <h4 className="user-name">{user?.name || "mQuan"}</h4>
        <p>Role: {user?.role || "admin"}</p>
        <div className="flex justify-between mt-5">
          <Button className="bg-green-500" handleClick={handleUpdateUser}>
            Update
          </Button>
          <Button className="bg-red-500" handleClick={handleDeleteUser}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
