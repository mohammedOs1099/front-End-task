import Table from "react-bootstrap/Table";
import {
  BsFillCheckCircleFill,
  BsFillTrash3Fill,
  BsFillXCircleFill,
  BsPerson
} from "react-icons/bs";
import { Link } from "react-router-dom";
import stayle from "./DataTable.module.css";
const { employeImg, deleteBtn, previwe_icon } = stayle;
const DataTable = ({ employees, handelDelated }) => {
  
  
  const displayData = (employees) => {
    return employees?.map((employee) => (
      <tr key={employee.id} className="  ">
        <td className="  p-1 ">
          <div className="d-flex align-items-center justify-content-start ">
            {employee.employeeImage ? (
              <img
                src={employee.employeeImage}
                alt={employee.employeename}
                className={`${employeImg} me-1 `}
              />
            ) : (
              <BsPerson
                color="#024a61"
                size={"1.75rem"}
                className={`${previwe_icon} me-1`}
              />
            )}

            <Link
              className=" text-decoration-none text-primary "
              to={`/Employee/${employee.id}`}
            >
              {employee.employeename}
            </Link>
          </div>
        </td>
        <td>{employee.role}</td>
        <td> {employee.email}</td>
        <td>{employee.Phone}</td>
        <td>{employee.startDate}</td>
        <td>
          {employee.state ? (
            <BsFillCheckCircleFill
              size={"1.5rem"}
              color="green"
              className="  "
            />
          ) : (
            <BsFillXCircleFill size={"1.5rem"} color="#BF0000" className="  " />
          )}
        </td>
        <td>
          <BsFillTrash3Fill
            onClick={() =>
              
              handelDelated(employee.id)}
            color="#B8B8B8"
            size={"1.7rem"}
            className={` ${deleteBtn}  p-1  btn btn-outline-light bg-transparent border-0 rounded-5`}
          />
        </td>
      </tr>
    ));
  };

  return (
    <>
      <Table responsive="lg" className=" text-nowrap ">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Role</th>
            <th>E-Mail</th>
            <th>Phone</th>
            <th>Start Data</th>
            <th>Active</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="  ">
          {employees?.length > 0 ? (
            displayData(employees)
          ) : (
            <tr>
              <td
                colSpan="7"
                className="text-start my-2  text-secondary p-2 h5 "
              >
                <p>No Employees Yet !</p>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default DataTable;
