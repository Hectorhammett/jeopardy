import React from 'react';
import cx from 'classnames';

const Button = ({
    onClick=() => {},
    color,
    children,
    ...pasthroughProps
}) => {
    const domClass = cx('btn', {
        [`btn-${color}`]: color
    });

    return (
        <button onClick={onClick} className={domClass} {...pasthroughProps}>
            { children }
        </button>
    )
};

export default Button;