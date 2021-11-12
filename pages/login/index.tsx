import Link from 'next/link'
import Button from '../../components/Button'
import Footer from '../footer'

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">

                <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form name="login-form" id="login-form">

                                <label htmlFor="username">
                                    <input name="username" id="username" className="padding" placeholder="username" />
                                </label>

                                <Button name="login"
                                    color='success'
                                    size="small">Wow
                                </Button>
                            </form>
                        </div>
                        <div className="card-footer">
                            <Link href="/">
                                <a>
                                    Home
                                </a>
                            </Link>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    )
}
