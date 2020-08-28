import React from 'react';
import cx from 'classnames';

const Button = ({
    color='primary',
    type='button',
    onClick= () => {console.log('not implemented')},
    children
}) => {
    const domClassnames = cx('btn', {
        [`btn-${color}`]: color,
    });

    return (
        <button 
        type={type}
        className={domClassnames}
        onClick={onClick}
        >
            { children }
        </button>
    )
};

export default Button;