import React from 'react';
import cx from 'classnames';

const Cell = ({
    span=1,
    xl=0,
    lg=0,
    md=0,
    sm=0,
    xs=0,
    justify,
    align,
    className,
    children,
    ...passthroughProps
}) => {
    const domClass = cx('cell', {
        [`cell--span-${span}`]: span,
        [`cell--xl-${xl}`]: xl,
        [`cell--lg-${lg}`]: lg,
        [`cell--md-${md}`]: md,
        [`cell--sm-${sm}`]: sm,
        [`cell--xs-${xs}`]: xs,
        [`cell--align-${align}`]: align,
        [`cell--align-${justify}`]: justify,
    }) 

    return(
        <div className={domClass} {...passthroughProps}>
            { children }
        </div>
    )
}

export default Cell;