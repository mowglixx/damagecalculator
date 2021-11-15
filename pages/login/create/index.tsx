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
            >Create User</Button>
        </div>
    )
}

export default IncomePage
