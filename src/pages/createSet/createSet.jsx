import React from 'react';

import { Heading } from '../../components';

const CreateSet = ({
    children,
    ...passthroughProps
}) => {
    return (
        <div>
            <Heading> Hello from the creator </Heading>
        </div>
    )
}

export default CreateSet;