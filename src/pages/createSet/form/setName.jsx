import React from 'react';

import { Input, Button, useMagicFormContext } from '../../../components';

const SetName = () => {
    const { incrementCard } = useMagicFormContext();

    return (
        <div>
            <Input label='Name of the game set' name='setName'/>
            <Button type='button' color='primary' onClick={incrementCard}> Next </Button>
        </div>
    )
}

export default SetName;