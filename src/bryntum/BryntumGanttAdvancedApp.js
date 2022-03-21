/**
 * The App file. It should stay as simple as possible
 */

// React libraries
import React, { Fragment } from 'react';

import { BryntumDemoHeader, BryntumThemeCombo } from '@bryntum/gantt-react'
import BryntumGanttAdvanced from './bryntumcomponents/BryntumGanttAdvanced';
import './BryntumGanttAdvancedApp.scss';

const BryntumGanttAdvancedApp = props => {
    // Header configuration
    const headerConfig = {
        href: '#'
    };

    return (
        <Fragment>
            <BryntumDemoHeader {...headerConfig} children={<BryntumThemeCombo />}/>
            <BryntumGanttAdvanced />
        </Fragment>
    );
};

export default BryntumGanttAdvancedApp;
