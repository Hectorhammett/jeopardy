import './text.scss';
import React from 'react';
import cx from 'classnames';

const Text = ({
    color,
    children,
    ...passthroughProps 
}) => {
    const domClass = cx('text', {
        [`text-${color}`]: color
    });

    return (
        <p className={domClass} {...passthroughProps}>{children}</p>
    )
}

export default Text;