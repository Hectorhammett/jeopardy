import './backButton.scss';
import React from 'react';
import { useHistory } from 'react-router-dom';

import Icon from '../icon/icon.jsx';

const BackButton = () => {
    const history = useHistory();

    const handleClick = () => {
        history.goBack();
    };

    return (
        <div className='button--back' onClick={handleClick}>
            <Icon icon='arrow-left' />
        </div>
    )
}

export default BackButton;