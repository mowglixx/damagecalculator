import Button from '../components/Button'
import ChunkyButton from '../components/ChunkyButton'
import Footer from '../components/Footer'
import React from 'react'

export default function Home() {

  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <main className="flex flex-col justify-center w-full flex-1 px-20 text-center">

          <Button name="DarkModeToggle" color="warning" onClick={() => setDarkMode(!darkMode)}>
            Toggle Darkness
          </Button>
        <ChunkyButton id="Dash" color="red" linkHref="/login" title="Login" subTitle="Login to your account" />
        <ChunkyButton id="Dash" color="green" linkHref="/login/create" title="Create Account" subTitle="Register for Damage Calculator&trade;" />
        <ChunkyButton id="Dash" color="blue" linkHref="/account/dash" title="Dash" subTitle="See a summary of your finances" />
        <ChunkyButton id="Dash" color="yellow" linkHref="/account/bills" title="Bills" subTitle="Manage bills" />
        <ChunkyButton id="Dash" color="orange" linkHref="/account/expenses" title="Expenses" subTitle="Manage expense" />
        <ChunkyButton id="Dash" color="pink" linkHref="/account/income" title="Income" subTitle="Manage income" />
      </main>

      <Footer />
    </>
  )
}
