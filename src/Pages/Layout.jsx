import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../shared/Sidebar/Sdebar";
import Header from "../shared/Header/Header";
export default function Layout() {
  return (
    <>
      <Container fluid className="">
        <Row className=" flex-nowrap   ">
          <Col xs={"3"} md={"2"} className=" bg-info p-0  vh-100">
            <Sidebar />
          </Col>
          <Col xs={"9"} md="10" className="  p-0  ">
            <Header />
            <div className="container">
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
