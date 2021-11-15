import React, { ReactChildren } from 'react';
import { Children } from 'react';

export type ButtonProps = {
    name?: String,
    onClick?: Function,
    color?: String,
    size?: String,
    children: JSX.Element
};

export const ButtonColor = color => { // validates color selection
    const ButtonColors = [
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'danger'
    ]
    // if ButtonColors includes `color` 
    //  - return color 
    //  - else: `primary`
    ButtonColors.includes(color) ? color : 'primary'
}

export type ButtonSizes = ['sm', 'md', 'lg']

export const Button = ({
    name = 'New Button',
    onClick = () => { },
    color = 'primary',
    size = 'md',
    children }) => {


    return (
        <>
            <button className={`${color} ${size}`}
                name={name}
                onClick={onClick}>
                {children} </button>
        </>
    )
}

export default Button
