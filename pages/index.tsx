import Head from 'next/head'
import Link from 'next/link'
import Button from '../components/Button'
import ChunkyButton from '../components/ChunkyButton'
import Footer from './footer'

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <Link href="/myAccount/dash">
            <a className="text-blue-600 dark:text-green-200">
              Dash
            </a>
          </Link>

          <Link href="/myAccount/income">
            <a className="text-blue-600 dark:text-green-200">
              Income
            </a>
          </Link>

          <Link href="/login">
            <a>Login</a>
          </Link>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <Link href="/myAccount/dash">
              <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 bg-white dark:bg-gray-800">

              </a>
            </Link>

            <Button name="DarkModeToggle" color="warn" onClick={()=>{}}>
              Toggle Darkness
            </Button>
          </div>
          <ChunkyButton id="Dash" color="green" linkHref="/login" title="Login" subTitle="Login to your account"/>
          <ChunkyButton id="Dash" color="green" linkHref="/account/create" title="Create Account" subTitle="Register for Damage Calculator&trade;"/>
          <ChunkyButton id="Dash" color="green" linkHref="/account/dash" title="Dash" subTitle="See a summary of your finances"/>
          <ChunkyButton id="Dash" color="green" linkHref="/account/bills" title="Bills" subTitle="Manage bills"/>
          <ChunkyButton id="Dash" color="green" linkHref="/account/expenses" title="Expenses" subTitle="Manage expense"/>
          <ChunkyButton id="Dash" color="green" linkHref="/account/income" title="Income" subTitle="Manage income"/>
        </main>

        <Footer />
      </div>
    </>
  )
}
