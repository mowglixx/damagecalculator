
// replace this function with real data function
const exampleBills: Bills = [
    {
        name: 'TalkTalk',
        billCatagory: 'Utilities',
        amount: 26.50,
        frequency: 'weekly'
    },
    {
        name: 'British Gas',
        billCatagory: 'Utilities',
        amount: 49.50,
        frequency: 'weekly'
    },
    {
        name: 'Nintendo',
        billCatagory: 'Gaming',
        amount: 9.99,
        frequency: 'weekly'
    },
    {
        name: 'ID Mobile',
        billCatagory: 'Utilities',
        amount: 21.99,
        frequency: 'weekly'
    }
]


export type Bill = {
    name: string,
    billCatagory: string,
    amount: number,
    frequency: string
}
export type Bills = Bill[]

export default function handler({ query, headers }, res) {
    res.status(200).json({ query, headers, exampleBills })
}