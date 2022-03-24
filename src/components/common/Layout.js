import * as React from 'react';
import "components/common/Layout.css";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import SideBar from "components/common/Sidebar";
import Router from 'Routes'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function LayoutView
() {
  return (
    <div>
    <Header></Header>
    <Container fluid className="ContentArea">
      <Row>
        <Col sm={1} className="sideMenu">
          <SideBar></SideBar>
        </Col>
        <Col sm={11}>
          <Router></Router>
        </Col>
      </Row>
    </Container>
    <Footer></Footer>
    </div>

  )
}