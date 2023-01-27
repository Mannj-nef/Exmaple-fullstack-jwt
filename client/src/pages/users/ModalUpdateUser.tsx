import { SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import RadioInput from "../../components/input/RadioInput";
import Modal from "../../components/modal";
import { RootState } from "../../redux/store";
import { isOpenModalUpdate } from "../../redux/users/userSlice";

const ModalUpdateUser = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const dispatch = useDispatch();

  const { loading, user } = useSelector((state: RootState) => state.userSlice);

  const handleUpdateUser = (e: SyntheticEvent) => {
    e.preventDefault();

    const newUser = {
      ...user,
      email,
      password,
      gender,
      role,
    };

    console.log(newUser);
  };

  return (
    <Modal dispatchAction={() => dispatch(isOpenModalUpdate(false))}>
      <Form
        handleSubmit={handleUpdateUser}
        className="user-update cursor-default"
      >
        <h1 className="title-update">Update user</h1>
        <Input
          control={setEmail}
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
          ></RadioInput>
          <RadioInput
            control={setGender}
            name="gender"
            value="female"
          ></RadioInput>
        </div>
        <div className="flex items-center gap-5 mt-5">
          <RadioInput control={setRole} name="role" value="admin"></RadioInput>
          <RadioInput control={setRole} name="role" value="user"></RadioInput>
        </div>
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
