import { ReactNode, SyntheticEvent } from "react";

interface IModal {
  children: ReactNode;
  dispatchAction: () => void;
}

const Modal = ({ children, dispatchAction }: IModal) => {
  const handleCloseModal = (e: SyntheticEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;

    if (target.matches(".modal")) {
      dispatchAction();
    }
  };
  return (
    <div
      className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
      onClick={handleCloseModal}
    >
      {children}
    </div>
  );
};

export default Modal;
