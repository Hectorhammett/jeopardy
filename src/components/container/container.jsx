import React from 'react';
import cx from 'classnames';

const Container = ({
    flexible=false,
    children,
    ...passthroughProps
}) => {
    const domClasses = cx({
        container: !flexible,
        'container-fluid': flexible
    });

    return (
        <div className={domClasses}>
            { children }
        </div>
    )
};

export default Container;