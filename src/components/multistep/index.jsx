import React from "react";
import { Modal } from "react-bootstrap";

const PopupWrapper = ({
  children,
  show,
  handleClose,
  heading,
  defaultClass
}) => {
  return (
    <Modal show={show} onHide={handleClose} dialogClassName={defaultClass}>
      <Modal.Header closeButton></Modal.Header>
      <h2>{heading}</h2>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default PopupWrapper;
