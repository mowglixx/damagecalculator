import Link from "next/link"
import { useState, useEffect } from "react";
import { LightBulbIcon } from '@heroicons/react/solid'

export const Footer = () => {
  const [darkMode, setDarkMode] = useState(true);
  const setDarkmode = useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <span className="font-thin">Damage Calculator</span>&nbsp;-&nbsp;
      <Link href="https://github.com/mowglixx/damagecalculator">
        <a className="flex items-center justify-center">
          GitHub
        </a>
      </Link>
      <div className="inline-block">
        <button name="DarkModeToggle" className="text-sm mx-2 p-2 border rounded dark:hover:bg-black" onClick={() => setDarkMode(!darkMode)}>
          <LightBulbIcon className="inline-block h-5 w-5 text-yellow-500" />
        </button>
      </div>
    </footer>
  )
}

export default Footer;