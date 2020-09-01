import React from 'react';

import { Cell, Grid } from '../components';

const Main = () => {
    return (
        <Grid>
            <Cell xl={6} lg={3} md={12} span={12}>
                <p>Hello</p>
            </Cell>
            <Cell xl={6} lg={3} md={12} span={12}>
                <p>Hello</p>
            </Cell>
        </Grid>
    )
}

export default Main;