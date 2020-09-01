import './cell.scss';
import React from 'react';
import cx from 'classnames';

const Cell = ({
    span=0,
    xl=0,
    lg=0,
    md=0,
    sm=0,
    xs=0,
    start=0,
    xlStart=0,
    lgStart=0,
    mdStart=0,
    smStart=0,
    xsStart=0,
    justify,
    align,
    className,
    children,
    ...passthroughProps
}) => {
    const domClass = cx('cell', {
        [`cell--${span}`]: span,
        [`cell--xl-${xl}`]: xl,
        [`cell--lg-${lg}`]: lg,
        [`cell--md-${md}`]: md,
        [`cell--sm-${sm}`]: sm,
        [`cell--xs-${xs}`]: xs,
        [`cell--align-${align}`]: align,
        [`cell--start-${start}`]: start,
        [`cell--xl-start-${xlStart}`]: xlStart,
        [`cell--lg-start-${lgStart}`]: lgStart,
        [`cell--md-start-${mdStart}`]: mdStart,
        [`cell--sm-start-${smStart}`]: smStart,
        [`cell--xs-start-${xsStart}`]: xsStart,
        [`cell--align-${justify}`]: justify,
    }) 

    return(
        <div className={domClass} {...passthroughProps}>
            { children }
        </div>
    )
}

export default Cell;