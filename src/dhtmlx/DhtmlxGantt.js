import React from "react";
import "./dhtmlxstyle.css";

import { Gantt, DefaultTheme } from "@dhtmlx/trial-react-gantt";
import { columns, scales, tasks, links, layout } from "./dhtmlxdata";

const noDrag = false; // if true - can't move and dnd tasks
const noEdit = true; // if true - can't edit task
const noNewLink = false; // if true - can't create new links

const readonly =
  noDrag || noEdit || noNewLink ? { noDrag, noEdit, noNewLink } : true;

export default function DhtmlxGanttBasic() {
  return (
    <DefaultTheme>
      <Gantt action={handler} readonly={readonly} scales={scales} columns={columns} tasks={tasks} links={links} layout={layout} />
    </DefaultTheme>
  );
}

export function handler({ action, obj: task, id }) {
  if (action === "select-task") console.log(`Task ${task} was selected `);
  if (action === "add-task") console.log(`Task ${task.start_date} was added `);
  if (action === "update-task") console.log(`Task ${task.start_date} was updated `);
}

