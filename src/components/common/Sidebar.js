import React from "react";
import "components/common/Sidebar.css";

import {
    Link,
  } from "react-router-dom";

//사용할 요소에 대한 컴포넌트를 react-bootstrap에서 import합니다
const SideBar = () => {
  return (
    <div>
      <ul className="sideMenu">
        <li>
          <Link to="/main" className="menuTitle">Main</Link>
        </li>
        {/* <li>
          <Link to="/login" className="menuTitle">Login Page</Link>
        </li> */}
        <li>
          <Link to="/chart1" className="menuTitle">Gantt1</Link>
        </li>
        <li>
          <Link to="/chart2" className="menuTitle">Gantt2</Link>
        </li>
      </ul>
      
    </div>
  );
};

export default SideBar;
