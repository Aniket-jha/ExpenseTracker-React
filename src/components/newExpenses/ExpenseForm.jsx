import {useState} from "react"
import "./ExpenseForm.css"


export default function ExpenseForm(props) {

    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredAmount,setEnteredAmount]=useState('')
    const [enteredDate,setEnteredDate]=useState('')


    const titleChangeHandler=(e)=>{
        setEnteredTitle(e.target.value)
    }

    const amountChangeHandler=(e)=>{
        setEnteredAmount(e.target.value)
    }
    
    const dateChangeHandler=(e)=>{
        setEnteredDate(e.target.value)
    }

    const submitHandler=(e)=>{
        e.preventDefault();

        const expenseData={
            title:enteredTitle,
            amount:+enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
            
            <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title:</label>
                <input type="text" placeholder="Enter the Title of your Expense" onChange={titleChangeHandler} value={enteredTitle} />
            </div>
             <div className="new-expense__control">
                <label htmlFor="title">Amount:</label>
                <input type="number" min="0.01" step="0.01" placeholder="What is the Amount ??" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
             <div className="new-expense__control">
                <label htmlFor="title">Date:</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
            </div>
            <div className="new-expense__action">
                <button type="button" onClick={props.onStopEditing}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
            </form>
    )
}
