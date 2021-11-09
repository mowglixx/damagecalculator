import React, { Children } from 'react'

export type buttonColor = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger']

export type Button = {
    name?: String,
    onClick?: Function,
    color?: buttonColor,
    size: String
}


export const Button = ({ name, onClick, color, size, children }) => {


    return (
        <>
            <button
                name={name}
                id={name}
                onClick={onClick}
                className={`btn-${color
                        ? color
                        : '-primary'}` + `${size
                            ? size
                            : '-md'}`}>
                {children}
            </button>
        </>
    )
}

export default Button
