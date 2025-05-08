import { useState } from "react";
import style from "./addButton.module.css";
import { Modal } from "antd";
import AddMovieForm from "../../AddMovieForm/";

export const AddButton = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={showModal} className={style.Addbutton}>
        Registre um novo filme
      </button>

      <Modal
        className="formModal"
        title="Registrar novo Filme"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <AddMovieForm onSubmitSuccess={() => handleOk()} />
      </Modal>
    </>
  );
};
