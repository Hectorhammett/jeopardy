import './accordeon.scss';
import React from 'react';
import cx from 'classnames';

const Accordeon = ({
    open=false,
    border,
    header,
    background,
    className,
    children,
    ...passthroughProps
}) => {
    const domClass = cx('card', {
        'card-open': open,
        [`border-${border}`]: border,
        [`bg-${background}`]: background,
    });


    return (
        <div className={domClass}>
            <div className='card-header'>
                { header }
            </div>
            <div className='card-body'>
                { children }
            </div>
        </div>
    )
};

export default Accordeon;