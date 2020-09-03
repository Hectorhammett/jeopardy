import './createSet.scss';
import React from 'react';
import { Form } from 'react-final-form';

import { Grid, Cell, Heading, BackButton, Input } from '../../components';

const CreateSet = () => {
    const onSubmit = (values) => {
        console.log(values);
    };

    const renderForm = ({ handleSubmit, form, submitting, pristine, values }) => {
        return (
            <form onSubmit={handleSubmit}>
                <Input label='Game Set Name' name='setName'/>
            </form>
        )
    };

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
                        <Form
                            onSubmit={onSubmit}
                            initialValues={{ setName: 'Test' }}
                            render={renderForm}
                        />
                    </Cell>
                </Grid>
            </Cell>
        </Grid>
    )
}

export default CreateSet;