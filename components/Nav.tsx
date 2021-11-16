import Link from 'next/link';
import { useState, useEffect } from 'react'
import { HomeIcon, ClipboardListIcon, CogIcon, UserIcon, UserAddIcon, LoginIcon, CashIcon, MenuIcon }  from '@heroicons/react/outline'

export const Nav = () => {
  const [navCollapse, setNavCollapse] = useState(true);
  let setNavcollapse = useEffect(() => {
    navCollapse
      ? document.querySelector('#navLinksSelector').classList.add("hidden")
      : document.querySelector('#navLinksSelector').classList.remove("hidden")
  }, [navCollapse]);

  const navLinks = [
    {
      name: 'Home',
      icon: <HomeIcon className="h-5 w-5" />,
      href: '/'
    },
    {
      name: 'Income',
      icon: <ClipboardListIcon className="h-5 w-5" />,
      href: '/account/income'
    },
    {
      name: 'Rent',
      icon: <ClipboardListIcon className="h-5 w-5" />,
      href: '/account/rent'
    },
    {
      name: 'Bills',
      icon: <ClipboardListIcon className="h-5 w-5" />,
      href: '/account/bills'
    },
    {
      name: 'Expenses',
      icon: <ClipboardListIcon className="h-5 w-5" />,
      href: '/account/expenses'
    },
    {
      name: 'Savings',
      icon: <CashIcon className="h-5 w-5" />,
      href: '/account/savings'
    },
    {
      name: 'Settings',
      icon: <CogIcon className="h-5 w-5" />,
      href: '/settings'
    },
    {
      name: 'Account',
      icon: <UserIcon className="h-5 w-5" />,
      href: '/account/dash'
    }]

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 dark:bg-gray-800 p-6 dark:border-b">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="p-1 text-xl font-thin hover:App-logo">Damage Calculator</span>
      </div>
      <div className="block md:hidden">
        <button className="flex items-center px-2 py-2 border rounded text-blue-100 border-blue-500 hover:text-white hover:border-white" onClick={() => { setNavCollapse(!navCollapse) }}>
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-full block flex-grow md:flex md:items-center md:w-auto" id="navLinksSelector">
        <div className="md:flex-grow text-center">
          {navLinks.map(({ name, icon, href }) => {
            return (
              <Link href={href} key={name}>
                <a className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
                  {/* {icon}*/} {name}
                </a>
              </Link>)
          })}
        </div>
        <div className="pt-4 text-center">
          <div className="inline-block">
            <Link href="/login">
              <a className="text-sm mx-2 p-2 border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white">
                <LoginIcon className="inline-block h-5 w-5" /> Login
              </a>
            </Link>
          </div>
          <div className="inline-block">
            <Link href="/login/register">
              <a className="text-sm mx-2 p-2 border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white">
                <UserAddIcon className="inline-block h-5 w-5" /> Register
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;