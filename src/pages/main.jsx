import React from 'react';

import { Cell, Grid, Heading } from '../components';

const Main = () => {
    return (
        <Grid>
            <Cell span={12}>
                <Heading> Hello! </Heading>
                <Heading size={2}> Hello! </Heading>
                <Heading size={3}> Hello! </Heading>
                <Heading size={4}> Hello! </Heading>
                <Heading size={5}> Hello! </Heading>
            </Cell>
            <Cell xl={6} lg={3} md={12} span={12}>
                <p>Hello</p>
            </Cell>
        </Grid>
    )
}

export default Main;