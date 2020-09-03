import React from 'react';

import { Button, useMagicFormContext } from '../../../components';

const Categories = () => {
    const { decrementCard } = useMagicFormContext();

    return (
        <div>
            Hi!
            <Button onClick={decrementCard} color='primary'> Back </Button>
        </div>
    )
};

export default Categories;