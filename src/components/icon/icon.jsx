import React from 'react';
import cx from 'classnames';

const Icon = ({
    icon,
}) => {
    const domClass = cx('fas', `fa-${icon}`);

    return (
        <i className={domClass} />
    )
};

export default Icon;