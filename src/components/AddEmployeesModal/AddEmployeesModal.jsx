import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Btn from "../Btn/Btn";
import Stepper from "./../Stepper/Stepper";
import { useDispatch } from "react-redux";
import { clearForm } from "../../redux/CustomFormikSlice";
const AddEmployeesModal = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  
  return (
    <>
      <Btn name={" + New Employees"} onClick={() => setShow(true)} />

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
            Add New Employees
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className=" p-0   ">
          <Stepper setShow={setShow} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddEmployeesModal;
