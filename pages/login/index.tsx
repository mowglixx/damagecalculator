import React from 'react'
import { useState } from 'react'


export const Login = ({ _ }) => {

    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center">
            <div className="m-auto w-1/2">
                <div
                    className="m-2 bg-white text-black dark:bg-gray-800 dark:text-white">
                    <h2
                        className="p-4 border-b text-xl">
                        Login
                    </h2>
                    <div className="card-body">
                        <form method="post" onSubmit={i => {
                            i.preventDefault();
                            console.log('Form Submitted ', i.target)
                        }}>
                            <div className="row">
                                <input
                                    name="username"
                                    id="username"
                                    className="inline-block m-2 p-2 rounded text-sm text-black focus:text-lg transition-all"
                                    placeholder="Username"
                                    title="GiBe Usernems"
                                    onChange={i => {
                                        const username = i.target.value
                                        console.info(username)
                                    }} />
                            </div>
                            <div className="row">
                                <input
                                    name="password"
                                    id="password"
                                    className="inline-block m-2 p-2 rounded text-sm focus:text-lg transition-all"
                                    placeholder="Password"
                                    type="password"
                                    title="GiBe Pa$$word" />
                            </div>
                            <div>
                                <button
                                    name="login"
                                    className='text-center text-white font-bold m-2 p-2 border border-green-500 rounded transition-color bg-green-400'
                                    onClick={() => { console.info(count) }}>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <button
                name="login"
                className='text-center text-white font-bold m-2 p-2 border border-green-500 rounded transition-color bg-green-400'
                onClick={() => { setCount(count + 1); console.info('Clicked the button %f Times', count) }}
                suppressHydrationWarning={true}>
                Clicked {count} Times
            </button>
        </div>
    )
}

export default Login;