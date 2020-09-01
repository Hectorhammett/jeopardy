import React from 'react';
import cx from 'classnames';

const Heading = ({
    size=1,
    color='dark',
    children,
    className,
    ...passthroughProps
}) => {
    const domClass = cx('heading', className, {
        [`text-${color}`]: color,
    })

    const elementName = `h${size}`;

    return React.createElement(elementName, { className: domClass, ...passthroughProps }, children);
}

export default Heading;