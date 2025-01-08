import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import stayle from "./Header.module.css";
import { BsEnvelope, BsBell } from "react-icons/bs";
import imge from "../../assets/Rectangle1393.jpg";
import { Link } from "react-router-dom";
const { iconRounded, dropdown, headerTexet, count, role } = stayle;
const Header = () => {
  const AdminName = "mohammed Kamale";
  return (
    <>
      <Navbar expand={"md"} className=" p-0 m-0    ">
        <Container
          fluid={true}
          className={`bg-items-color px-2 px-lg-4   shadow shadow-md   `}
        >
          <Navbar.Brand as={Link} className={`${headerTexet}    `} to="/">
            Employees
          </Navbar.Brand>

          <Nav className=" me-auto me-sm-0  ms-0 ms-md-auto    justify-content-center align-items-center flex-row ">
            <Link className=" me-1" to="#home">
              <div className={`${iconRounded} flex-column `}>
                <div className={`${count}`}>
                  <p>+5</p>
                </div>
                <BsEnvelope size={"1.3rem"} />
              </div>
            </Link>
            <Link className=" me-1" to="#link">
              <div className={`${iconRounded}`}>
                <div className={`${count}`}>
                  <p>+9</p>
                </div>
                <BsBell size={"1.3rem"} />
              </div>
            </Link>
          </Nav>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className=" flex-grow-0   " id="basic-navbar-nav">
            <Nav className="ms-auto my-3   flex-row justify-content-center align-items-center ">
              <Link className=" p-0 me-1" to="#link">
                <div className={`${iconRounded} overflow-hidden`}>
                  <img
                    className={`w-100 rounded-circle  `}
                    src={imge}
                    alt={AdminName}
                  />
                </div>
              </Link>
              <div className={`${dropdown} `}>
                <NavDropdown
                  className=" m-0 "
                  title={`${AdminName}   `}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item to="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item to="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <p className={`${role} p-0 m-0`}> Admin</p>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
