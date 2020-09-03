import './createSet.scss';
import React from 'react';

import { Grid, Cell, Heading, BackButton, MagicForm } from '../../components';
import SetName from './form/setName.jsx';
import Categories from './form/categories.jsx';

const CreateSet = () => {
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
            <Cell span={12}>
                <Grid padding={false}>
                    <Cell span={12}>
                        <MagicForm>
                            <SetName />
                            <Categories />
                        </MagicForm>
                    </Cell>
                </Grid>
            </Cell>
        </Grid>
    )
}

export default CreateSet;