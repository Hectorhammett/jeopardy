import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-final-form';

const magicFormContext = createContext();

const MagicForm = ({
    initialValues={},
    onSubmit=() => {},
    children
}) => {
    const [currentCard, setCurrentCard] = useState(0);

    const incrementCard = () => {
        setCurrentCard(currentCard + 1);
    };

    const decrementCard = () => {
        setCurrentCard(currentCard - 1);
    };

    const renderForm = ({ handleSubmit, form, submitting, pristine, values  }) => {
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    { children[currentCard] }
                </div>
            </form>
        )
    }

    return (
        <magicFormContext.Provider value={{currentCard, setCurrentCard, incrementCard, decrementCard}}>
            <Form
                initialValues={initialValues}
                onSubmit
                render={renderForm}
            />      
        </magicFormContext.Provider>
    )
};

const useMagicFormContext = () => {
    return useContext(magicFormContext);
}

export {
    MagicForm,
    useMagicFormContext,
}