import { useEffect } from "react";

const IncomePage = () => {

    const addIncome = () => {
        console.log('boop')
    };


    return (
        <div className="absolute p-20">
            <p className="mt-5">Income</p>
            <button {...addIncome()}
            >
                Add an income
            </button>
        </div>
    )
}

export default IncomePage