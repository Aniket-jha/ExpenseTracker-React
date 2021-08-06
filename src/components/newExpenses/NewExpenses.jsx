import { useState } from "react"
import "./NewExpenses.css"
import ExpenseForm from "./ExpenseForm"

export default function NewExpenses(props) {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddNewExpense(expenseData)
        setIsEditing(false)
    }
    const startNewEditing=()=>{
        setIsEditing(true)
    }
    const stopIsEditing=()=>{
        setIsEditing(false)
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startNewEditing}>Add New Expenses</button>}
           {isEditing &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEditing={stopIsEditing} />}
        </div>
    )
}
