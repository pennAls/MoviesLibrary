import { useState } from "react";
import style from "./moviebox.module.css";
import { Modal } from "antd";
import MovieBoxModal from "../MovieBoxModal";

export const MovieBox = ({
  src,
  title,
  id,
}: {
  src: string;
  title: string;
  id: string;
}) => {
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
    }, 100);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div onClick={showModal} className={`${style.card}`}>
      <img src={src} alt={title} />
      <div className={style.info}>
        <h3>{title}</h3>
      </div>

      <Modal
        className="noPaddingModal"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <MovieBoxModal id={id} closeModal={() => handleOk()}></MovieBoxModal>
      </Modal>
    </div>
  );
};
