import * as React from "react";
import "./Main.css";
import Header from "../components/common/Header";
import SideBar from "../components/common/Sidebar";
import Router from "../Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import DhtmlxGanttBasic from "../dhtmlx/DhtmlxGantt";

export default function GanttChart() {
  return (
    <div>
      <DhtmlxGanttBasic />
    </div>
  );
}
