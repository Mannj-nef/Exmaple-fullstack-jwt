import { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import RadioInput from "../../components/input/RadioInput";
import Modal from "../../components/modal";
import { ROLE_TYPE, TOAST_TYPE } from "../../configs/constants";
import { IUser } from "../../interfaces";
import { RootState } from "../../redux/store";
import { isOpenModalUpdate, updateUser } from "../../redux/users/userSlice";

const ModalUpdateUser = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.authSlice);

  const {
    loading,
    users,
    idUser,
    accessTolken: token,
  } = useSelector((state: RootState) => state.userSlice);

  const handleUpdateUser = (e: SyntheticEvent) => {
    e.preventDefault();

    const userUpdate = users.find((item) => item._id === idUser);

    const newUser = {
      ...userUpdate,
      email,
      password,
      gender,
      role,
    };

    if (password.length === 0) {
      toast.error("Password cannot be empty", TOAST_TYPE);
      return;
    }

    dispatch(updateUser({ newUser: newUser as IUser, token }));
  };

  useEffect(() => {
    const userUpdate = users.find((item) => item._id === idUser);
    if (userUpdate) {
      setEmail(userUpdate.email);
      setGender(userUpdate.gender);
      setRole(userUpdate.role);
    }
  }, [idUser, users]);

  return (
    <Modal dispatchAction={() => dispatch(isOpenModalUpdate(false))}>
      <Form
        handleSubmit={handleUpdateUser}
        className="user-update cursor-default"
      >
        <h1 className="title-update">Update user</h1>
        <Input
          control={setEmail}
          value={email}
          name="email"
          placeholder="Please enter your email address"
        ></Input>
        <Input
          type="password"
          control={setPassword}
          name="password"
          placeholder="Please enter your password"
        ></Input>

        <div className="flex items-center gap-5 mt-5">
          <RadioInput
            control={setGender}
            name="gender"
            value="male"
            isChecked={gender === "male"}
          ></RadioInput>
          <RadioInput
            control={setGender}
            name="gender"
            value="female"
            isChecked={gender === "female"}
          ></RadioInput>
        </div>
        {user?.role === ROLE_TYPE.ADMIN ? (
          <div className="flex items-center gap-5 mt-5">
            <RadioInput
              control={setRole}
              name="role"
              value="admin"
              isChecked={role === "admin"}
            ></RadioInput>
            <RadioInput
              control={setRole}
              name="role"
              value="user"
              isChecked={role === "user"}
            ></RadioInput>
          </div>
        ) : null}
        <Button className="btn-update-user bg-orange-600">
          {loading ? (
            <span className=" w-5 h-5 border-y-transparent border-y-2 animate-spin m-auto border-white rounded-full border-x-2 block"></span>
          ) : (
            "Update"
          )}
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalUpdateUser;
