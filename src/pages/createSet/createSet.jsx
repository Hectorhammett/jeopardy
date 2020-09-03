import React from 'react';

import { Grid, Cell, Heading, BackButton } from '../../components';

const CreateSet = ({
    children,
    ...passthroughProps
}) => {
    return (
        <Grid className='create-set'>
            <Cell span={1}>
                <BackButton />
            </Cell>
            <Cell span={11}>
                <Heading>
                    Create a game set.
                </Heading>
            </Cell>
        </Grid>
    )
}

export default CreateSet;