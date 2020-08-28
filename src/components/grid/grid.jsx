import './grid.scss';
import React from 'react';
import cx from 'classnames';

const Grid = ({
    padding=true,
    verticalPadding=false,
    horizontalPadding=false,
    align,
    justify,
    className,
    children,
    ...passthroughProps
}) => {
    const domClass = cx('grid', {
        className,
        'grid--pading': padding,
        'grid--vertical-pading': verticalPadding,
        'grid--horizontal-padding': horizontalPadding,
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