import "App.css";
// import Login from "./pages/Login"
import React from 'react'
import Router from 'Routes'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      <Router></Router>
      {/* <Header></Header>
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
      <Footer></Footer> */}

    </div>
  );
}

export default App;
