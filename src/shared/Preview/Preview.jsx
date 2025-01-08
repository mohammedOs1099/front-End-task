import { useDispatch } from "react-redux";
import stayle from "./Preview.module.css";
import { Form } from "react-bootstrap";
import { setPersonalData } from "../../redux/CustomFormikSlice";
import { BsPerson } from "react-icons/bs";
const { imag_Preview, previwe_icon } = stayle;
const Preview = ({ data = {}, setFieldValue, edit }) => {
  const {
    employeeImage = "",
    state = false,
    startDate = "",
    role = "",
    employeename = "",
    email = "",
    Phone = ""
  } = data;

  const dispatch = useDispatch();

  const handleSwitchToggle = () => {
    const newState = !state;
    if (edit) {
      setFieldValue("state", newState);
    }
    dispatch(setPersonalData({ state: newState }));
  };

  return (
    <div className="no-scrollbar">
      <div className="table-responsive rounded-3 shadow-sm p-2 my-2 bg-white">
        <table className="table-auto w-100 text-secondary">
          <thead className="bg-white">
            <tr>
              <th
                className="text-start fw-semibold text-black rounded-3 py-2 ps-2 bg-body-tertiary"
                colSpan="2"
              >
                Summary
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 ps-2 fw-light text-secondary">Employee:</td>
              <td className="py-2 d-flex gap-2 align-items-center">
                <div className={`${imag_Preview}`}>
                  {employeeImage ? (
                    <img
                      src={employeeImage}
                      alt={`${employeename}'s profile`}
                    />
                  ) : (
                    <BsPerson size={"2rem"} className={previwe_icon} />
                  )}
                </div>
                <p className="m-0 text-black">{employeename}</p>
              </td>
            </tr>
            <tr>
              <td className="py-2 ps-2 fw-light text-secondary">Role:</td>
              <td className="py-2 text-black">{role}</td>
            </tr>
            <tr>
              <td className="py-2 ps-2 fw-light text-secondary">E-Mail:</td>
              <td className="py-2 text-black">{email}</td>
            </tr>
            <tr>
              <td className="py-2 ps-2 fw-light text-secondary">Phone:</td>
              <td className="py-2 text-black">{Phone}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="d-flex flex-column flex-sm-row gap-1">
        <div className="shadow-sm p-1 rounded-4 w-100 bg-white">
          <h3 className="bg-light p-2 rounded-4">Data</h3>
          <p className="p-2">Start date: {startDate}</p>
        </div>
        <div className="shadow-sm p-3 rounded-4 w-75 bg-white">
          <h3 className="bg-light p-2 rounded-3">Active</h3>
          <div className="d-flex align-items-center">
            <span className="p-2 me-5">Active</span>
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                checked={state}
                onChange={handleSwitchToggle}
              />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
