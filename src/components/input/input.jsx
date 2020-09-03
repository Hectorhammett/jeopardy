import React from 'react';
import cx from 'classnames';
import { useField } from 'react-final-form';

const Input = ({
    type='text',
    label,
    className,
    children,
    placeHolder,
    name,
    small,
    ...pasthroughProps
}) => {
    const field = useField(name);
    const domClass = cx('form-group', className); 

    const renderLabel = () => {
        if (!label) {
            return null;
        }

        return (
            <label htmlFor={name}> { label } </label>
        )
    }

    const renderSmall = () => {
        if (!small) {
            return null;
        }

        return (
            <small className='form-text text-muted'>
                { small }
            </small>
        )
    }
    
    return (
        <div className={domClass}>
            {renderLabel()}
            <input type={type} className='form-control' name={name} value={field.input.value} onChange={field.input.onChange}/>
        </div>
    )
}

export default Input;