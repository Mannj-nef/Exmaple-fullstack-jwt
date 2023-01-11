import "./user.scss";
import UserItem from "./UserItem";

const UsersPage = () => {
  return (
    <div className="user-page">
      <h1 className="title">User list</h1>

      <div className="user-list">
        {Array(5)
          .fill(null)
          .map((user, index) => (
            <UserItem key={user?.id || index} user={user}></UserItem>
          ))}
      </div>
    </div>
  );
};

export default UsersPage;
