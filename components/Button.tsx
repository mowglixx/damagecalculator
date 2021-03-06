import React, { Props, ReactChildren } from 'react';
import { Children } from 'react';

export type ButtonProps = {
    name?: String,
    onClick?: VoidFunction,
    color?: String,
    size?: String,
    children: JSX.Element
};



export type ButtonSizes = ['sm', 'md', 'lg']

export const Button = ({
    name = 'New Button',
    onClick = () => { },
    color = 'primary',
    size = 'md',
    children }) => {
    const ButtonColor = color => { // validates color selection
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
