import './accordeon.scss';
import React from 'react';
import cx from 'classnames';

const Card = ({
    open=false,
    border,
    header,
    background,
    className,
    children,
    ...passthroughProps
}) => {
    const domClass = cx('card', className, {
        'card-open': open,
        [`border-${border}`]: border,
        [`bg-${background}`]: background,
    });


    return (
        <div className={domClass} {...passthroughProps}>
            <div className='card-header'>
                { header }
            </div>
            <div className='card-body'>
                { children }
            </div>
        </div>
    )
};

export default Card;