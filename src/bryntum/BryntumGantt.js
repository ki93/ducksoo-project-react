/**
 * Application
 */
 import React, { Fragment } from 'react';

 import { BryntumDemoHeader, BryntumThemeCombo, BryntumGantt } from '@bryntum/gantt-react';
 import { ganttConfig } from './BryntumGanttBasicConfig';
 import './BryntumGanttBasic.scss';

 const BryntumGanttBasic = () => {
     // edit button click handler
     const handleEditClick = ({ record, grid: gantt }) => {
         gantt.editTask(record);
     };
 
     return (
         <Fragment>
             <BryntumDemoHeader
                 href="#"
                 children={<BryntumThemeCombo />}
             />
             <BryntumGantt {...ganttConfig} extraData={{ handleEditClick }} />
         </Fragment>
     );
 };
 
 export default BryntumGanttBasic;