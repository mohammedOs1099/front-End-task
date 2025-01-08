import { Col, Container, Row } from "react-bootstrap";
import DataTable from "../components/DataTable/DataTable";
import SearchInput from "../components/SearchInput/SearchInput";

import AddEmployeesModal from "../components/AddEmployeesModal/AddEmployeesModal";
import { useDispatch, useSelector } from "react-redux";
import { removeEmployee } from "../redux/EmployeesSlice";
import { useCallback, useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import AlertComp from "../components/AlertComp/AlertComp";

const Home = () => {
  const { employees } = useSelector((state) => state.employees);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const timeoutId = useRef(null);
  const [currentEmployees, setCurrentEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const employeesPerPage = 5;
  useEffect(() => {
    setFilteredEmployees(employees);
  }, [employees]);
  const dispatch = useDispatch();
  const handleOpenConfirm = (id) => {
    setEmployeeToDelete(id);
    setShowConfirm(true);
  };

  const handleCloseConfirm = () => {
    setEmployeeToDelete(null);
    setShowConfirm(false);
  };

  const handleConfirmDelete = () => {
    if (employeeToDelete) {
      dispatch(removeEmployee(employeeToDelete));
      setFilteredEmployees(employees);
    }
    handleCloseConfirm();
  };
  const handelSearched = useCallback(
    (value) => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }

      timeoutId.current = setTimeout(() => {
        const searchTerm = value.toLowerCase().trim();

        if (searchTerm === "") {
          setFilteredEmployees(employees);
        } else {
          const filtered = employees.filter((employee) =>
            employee.employeename.toLowerCase().includes(searchTerm)
          );
          setFilteredEmployees(filtered);
        }
        setCurrentPage(0);
      }, 500);
    },
    [employees]
  );
  useEffect(() => {
    const startIndex = currentPage * employeesPerPage;
    const endIndex = startIndex + employeesPerPage;
    setCurrentEmployees(filteredEmployees.slice(startIndex, endIndex));
  }, [currentPage, filteredEmployees]);

  useEffect(() => {
    setFilteredEmployees(employees);
  }, [employees]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  return (
    <>
      <Container className=" mx-auto w-auto m-3 rounded-3 shadow shadow-lg bg-white ">
        <Row className="  m-2 w-100     ">
          <Col
            xs={"12"}
            className="   d-flex flex-md-row flex-column    align-items-center "
          >
            <div className="col-12 col-sm-12 col-md-8 col-lg-9 ">
              <SearchInput handelSearched={handelSearched} />
            </div>
            <div className="col-12 col-md-4 col-lg-3  ">
              <AddEmployeesModal />
            </div>
          </Col>

          <Col xs={"12"}>
            <DataTable
              employees={currentEmployees}
              handelDelated={handleOpenConfirm}
            />
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={Math.ceil(
                (filteredEmployees?.length || 0) / employeesPerPage
              )}
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={"pagination my-2 py-2"}
              activeClassName={"active"}
              previousClassName={"previous"}
              nextClassName={"next"}
              disabledClassName={"disabled"}
            />
          </Col>
        </Row>
        <AlertComp
          handleConfirmDelete={handleConfirmDelete}
          showConfirm={showConfirm}
          handleCloseConfirm={handleCloseConfirm}
        />
      </Container>
    </>
  );
};

export default Home;
