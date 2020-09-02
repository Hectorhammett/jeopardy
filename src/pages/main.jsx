import React from 'react';

import { Cell, Grid, Heading, Text } from '../components';

const Main = () => {
    return (
        <Grid>
            <Cell span={12}>
                <Heading> Hello! </Heading>
                <Heading size={2} color='primary'> Hello! </Heading>
                <Heading size={3}> Hello! </Heading>
                <Heading size={4}> Hello! </Heading>
                <Heading size={5}> Hello! </Heading>
            </Cell>
            <Cell xl={6} lg={3} md={12} span={12}>
                <Text> Hi paragraph! </Text>
                <Text color='primary'> Hi paragraph! </Text>
                <button className='btn btn-primary'> Hello</button>
            </Cell>
        </Grid>
    )
}

export default Main;