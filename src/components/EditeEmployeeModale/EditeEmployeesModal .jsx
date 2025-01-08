import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Btn from "../Btn/Btn";
import Stepper from "./../Stepper/Stepper";
import { useDispatch } from "react-redux";
import { clearForm } from "../../redux/CustomFormikSlice";
const EditeEmployeesModal = ({empoyeeData}) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();


  return (
    <>
      <Btn name={"edit employee "} onClick={() => setShow(true)} />

      <Modal
        onExit={() => dispatch(clearForm())}
        centered
        size="lg"
        show={show}
        onHide={() => {
          dispatch(clearForm());
          setShow(false);
        }}
        dialogClassName="modal-90w     "
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Edit Employees
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className=" p-0   ">
          <Stepper edit={true} empoyeeData={empoyeeData} setShow={setShow} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditeEmployeesModal;
