import Button from '../../components/Button'
import React from 'react'
import { useRouter } from 'next/dist/client/router';

export default function Login(pageProps) {

    const router = useRouter();

    console.log(router.route)

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 -translate-y-32">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                        <form method="post" name="login-form" id="login-form">
                                <div className="row">
                                    <input name="username" id="username" className="loginInput" placeholder="Username" title="GiBe Usernems" />
                                </div>
                                <div className="row">
                                    <input name="password" id="password" className="loginInput" placeholder="Password" type="password" title="GiBe Pa$$word" />
                                </div>
                                <div>
                                <button name="login"
                                    className='success'>Login
                                </button>
                                </div>
                            {console.log('%o', pageProps)}

                            </form>
                        </div>
                </div>
            </div>
        </>
    )
}
