import React from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router";
export default function ModalLR(props) {
  const history = useHistory();
  const handleClose = () => {
    history.push("/");
  };
  return (
    <>
      <Modal
        show
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className="row">
          <div className="col-12">{props.children}</div>
        </div>
      </Modal>
    </>
  );
}
