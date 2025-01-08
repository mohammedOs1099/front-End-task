import { useSelector } from "react-redux";
import Preview from "../shared/Preview/Preview"
import { useParams } from "react-router-dom";
import EditeEmployeesModal from "../components/EditeEmployeeModale/EditeEmployeesModal ";

const EmployeeInDitails = () => {
    
    const { id } = useParams();
    const { employees } = useSelector((state) => state.employees);
    const employee = employees.find((emp) => emp.id === id);
   
    return (
      <>
        <div className="container">
          <div className="row p-2 m-1 d-flex justify-content-between align-items-center  ">
            <h6 className=" col-12 col-md-8 col-lg-9 ">
              Employees
              <span className="h6 mx-2 text-secondary ">{` >  ${
                employee ? employee.employeename : ""
              }`}</span>
            </h6>
            <div className=" col-12 col-md-4 col-lg-3  ">
              <EditeEmployeesModal empoyeeData={employee} />
            </div>
          </div>

          <Preview data={{ ...employee }} />
        </div>
      </>
    );
}
 
export default EmployeeInDitails;