import Link from 'next/link'
import Button from '../../components/Button'
import Footer from '../../components/Footer'

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <Link href="/">
                    <a>
                        Home
                    </a>
                </Link>
                <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form name="login-form" id="login-form">
                                <div className="row">
                                    <input name="username" id="username" className="loginInput" placeholder="Username" title="GiBe Usernems" />
                                </div>
                                <div className="row">
                                    <input name="password" id="password" className="loginInput" placeholder="Password" type="password" title="GiBe Pa$$word" />
                                </div>
                                <div>
                                    <Button name="login"
                                        color='success'
                                        size="small">Login
                                    </Button>
                                </div>


                            </form>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    )
}
