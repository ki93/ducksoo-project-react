import React from "react";
import "components/common/Header.css";
import {
  useNavigate,
} from "react-router-dom";
import useAuth from "useAuth";

//사용할 요소에 대한 컴포넌트를 react-bootstrap에서 import합니다
import Navbar from "react-bootstrap/Navbar";
const Header = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="headerTitle">
          {/* <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "} */}
          <span>HN Inc</span>

          <span className="singinUser">
            Welcome {auth.user}!{" "}
            <button
              onClick={() => {
                auth.signout(() => navigate("/login"));
              }}
            >
              Sign out
            </button>
          </span>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Header;
