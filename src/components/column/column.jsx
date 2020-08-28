import React from 'react';
import cx from 'classnames';

const Column = ({
    xl=0,
    lg=0,
    md=0,
    sm=0,
    xs=0,
    children
}) => {
   const domClassnames = cx('col', {
        [`col-xl-${xl}`]: xl,
        [`col-lg-${lg}`]: lg,
        [`col-md-${md}`]: md,
        [`col-sm-${sm}`]: sm,
        [`col-xs-${xs}`]: xs,
    });

    return (
        <div className={domClassnames}>
            { children }
        </div>
    )
};

export default Column;