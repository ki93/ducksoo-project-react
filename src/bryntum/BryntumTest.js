import React from 'react';
import { BryntumGantt,BryntumButton } from '@bryntum/gantt-react';
import { ganttConfig } from './BrytumTestConfig'

export const BryntumTest = () => {
    return (
        <BryntumGantt
            {...ganttConfig}
        // other props, event handlers, etc
        >
        </BryntumGantt>
    );

}
