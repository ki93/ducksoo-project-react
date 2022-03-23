import * as React from 'react';
import "pages/Main.css";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import SideBar from "components/common/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function GanttChart() {
  return (
    <div>
      <Header></Header>
      <Container fluid className="ContentArea">
        <Row>
          <Col sm={1} className="sideMenu">
            <SideBar></SideBar>
          </Col>
          <Col sm={11} >
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}