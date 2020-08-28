import React from 'react';

import { Cell, Grid } from '../components';

const Main = () => {
    return (
        <Grid>
            <Cell span={6}>
                <p>Hello</p>
            </Cell>
            <Cell>
                <p>Hello</p>
            </Cell>
        </Grid>
    )
}

export default Main;