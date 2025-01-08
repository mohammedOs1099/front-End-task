import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaChartPie } from "react-icons/fa";
import { TbSettings } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
import style from "./Sidebar.module.css";
const { container, nav, active, navLink } = style;
const Sidebar = () => {
  return (
    <>
      <Container fluid className={`${container} p-0`}>
        <Row className="m-0">
          <Col
            xs={3}
            className=" d-flex pt-5 align-items-center flex-column  vh-100 p-0 m-0 w-100"
            style={{ height: "100vh" }}
          >
            <Navbar.Brand as={Link} className={` w-50 my-4 `} to="/">
              <img src={logo} alt="logo" className="w-100" />
            </Navbar.Brand>
            <Nav className={`flex-column ${nav}`}>
              <Nav.Link
                as={Link}
                to="/"
                className={`${navLink} my-3  flex-nowrap d-flex align-items-center justify-content-center`}
              >
                <FaChartPie className="me-1" />
                <small>Dashboard</small>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/"
                className={`${navLink} my-3  flex-nowrap d-flex align-items-center justify-content-center`}
              >
                <FaPeopleGroup className="me-1" />

                <small className="  ">Teams</small>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/"
                className={`${navLink} my-3 ${active} flex-nowrap d-flex align-items-center justify-content-center`}
              >
                <BsPeople className="m-1" />
                <small className={``}>Employees</small>
              </Nav.Link>
              <NavDropdown
                title={
                  <>
                    <TbSettings color={"white"} />{" "}
                    <small className="text-white">Settings</small>
                  </>
                }
                id="basic-nav-dropdown"
                className={`py-3 ${navLink} dropdown`}
              />
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sidebar;
