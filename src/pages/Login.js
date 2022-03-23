import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "useAuth";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Ducksoo from "assets/ducksooLogo.png"
import "pages/Login.css";
import axios from "axios";

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const checkLogin = () => {
    console.log(inputId);
    console.log(inputPw);
    axios
      .post(
        "/login",
        {
          id: inputId,
          pw: inputPw,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Err");
      });
  };
  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(
    () => {
      // id pw to server
      checkLogin();
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    []
  );
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/main";

  function handleLoginSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }
  return (
    <div className="loginpage">
      <div className="loginBox">
        <Card className="text-center" bg="#00000" text="dark" border="secondary"> 
          <Card.Body className="loginCardBody">
            <div className="loginContent">
              <div className="loginContentLogo">
                {/* <p className="loginHnText">Hn Inc</p> */}
                <img
                  src={Ducksoo}
                  className="img-fluid"
                  className="loginContentLogoImg"
                  alt="..."
                  style={{ maxWidth: "24rem" }}
                />{" "}
              </div>
              <div className="loginContentForm">
                <div className="createAccountBtn">
                  Create Account
                </div>
                <Form onSubmit={handleLoginSubmit} className="loginFormInput">
                  {/* <Card.Title>Please Login</Card.Title> */}
                  <Form.Label className="loiginFormLabel" >ID</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={inputId}
                    onChange={handleInputId}
                    placeholder="ID"
                    className="inputLoginInfo"
                  />
                  <Form.Label className="loiginFormLabel" >Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="input_pw"
                    value={inputPw}
                    onChange={handleInputPw}
                    placeholder="PW"
                    className="inputLoginInfo"
                  />
                  <Button
                    className="loginBtn"
                    variant="outline-secondary"
                    type="submit"
                    onClick={checkLogin}
                  >
                    Login
                  </Button>
                </Form>
              </div>
            </div>
          </Card.Body>
          <Card.Footer className="text-muted" className="loginFormFooter">
            Copyright 2022. HN Inc All Rights Reserved.
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default Login;
