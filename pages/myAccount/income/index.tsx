import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Button from '../../../components/Button'

const addIncome = () => {
    console.warn('yay!')
}

const IncomePage = () => {

    return (
        <div className="absolute p-20">
            <p className="mt-5">Income</p>
            <Button
                name="addIncomeButton"
                onClick={addIncome}
                color={'warning'}
            >{'Add an income'}</Button>
        </div>
    )
}

export default IncomePage
