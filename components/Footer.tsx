import Link from "next/link"

export default function Footer(){
    return (
        <footer className="flex items-center justify-center w-full h-24 border-t">
        <Link href="https://github.com/mowglixx/damagecalculator">
        <a className="flex items-center justify-center">
          GitHub
        </a>
        </Link>
      </footer>
    )
}

