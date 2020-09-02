import './grid.scss';
import React from 'react';
import cx from 'classnames';

const Grid = ({
    padding=true,
    verticalPadding=false,
    align,
    justify,
    className,
    children,
    ...passthroughProps
}) => {
    const domClass = cx('grid', className, {
        'grid--padding': padding,
        'grid--vertical-padding': verticalPadding,
        [`grid--justify-${justify}`]: justify,
        [`grid--align-${align}`]: align,
    });

    return (
        <div className={domClass} {...passthroughProps}>
            { children }
        </div>
    )
};

export default Grid;