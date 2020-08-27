import './Heading.scss';
import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Heading = ({
    size=1,
    color='primary',
    children,
}) => {
    props = {
        className: cx('heading', { 
            [`text-color-${color}`]: color
         })
    };

    return React.createElement(`H${size}`, props, children);
}

export default Heading;