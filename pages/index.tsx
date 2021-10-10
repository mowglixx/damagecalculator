import Head from 'next/head'
import Link from 'next/link'
import Footer from './footer'

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <Link href="/myAccount/dash">
          <a className="text-blue-600 dark:text-green-200">
            Dan Calc
          </a>
          </Link>

        <p className="mt-3 text-2xl">
          Get started by editing
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <Link href="/myAccount/dash">
          <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold">Summary</h3>
            <p className="mt-4 text-xl">
              Find a breif summary of your current Finances.
            </p>
          </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
    </>
  )
}
