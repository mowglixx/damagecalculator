import Link from 'next/link';
import { useState, useEffect } from 'react'

export default function Nav() {
  const [darkMode, setDarkMode] = useState(true);

  let setDarkmode = useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // const [navCollapse, setNavCollapse] = useState(false);
  const [navCollapse, setNavCollapse] = useState([true], (navCollapse) => {
    navCollapse
      ? document.querySelector('#navLinksSelector').classList.add("hidden")
      : document.querySelector('#navLinksSelector').classList.remove("dark")
  });

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Income', href: '/account/income' },
    { name: 'Bills', href: '/account/bills' },
    { name: 'Rent', href: '/account/rent' },
    { name: 'Savings', href: '/account/savings' },
    { name: 'Investments', href: '/account/investments' },
    { name: 'Settings', href: '/settings' },
    { name: 'Account', href: '/account/dash' }]

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Damage Calculator</span>
      </div>
      <div className="block md:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-blue-100 border-blue-500 hover:text-white hover:border-white" onClick={() => { setNavCollapse(!navCollapse) }}>
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-full block flex-grow md:flex md:items-center md:w-auto" id="navLinksSelector">
        <div className="text-sm md:flex-grow">
          {navLinks.map(({ name, href }) => {
            return (
              <Link href={href} key={name}>
                <a className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
                  {name}
                </a>
              </Link>)
          })}
        </div>
        <div>
          <Link href="/login">
            <a href="#" className="inline-block text-sm px-4 py-2 my-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0">Login</a>
          </Link>
          <Link href="/login/create">
            <a className="inline-block text-sm px-4 py-2 my-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0">Register</a>
          </Link>
          <button name="DarkModeToggle" color="warning" onClick={() => setDarkMode(!darkMode)}>
            L/D
          </button>
        </div>
      </div>
    </nav>
  )
}
