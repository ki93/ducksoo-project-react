import * as React from 'react';
import "./Layout.css";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./Sidebar";
import Router from '../../Routes'
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