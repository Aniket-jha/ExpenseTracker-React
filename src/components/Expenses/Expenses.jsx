import React, {useState} from 'react'
import "./Expenses.css"
import Card from "../UI/Cards"
import ExpenseFilter from "./ExpenseFilter"
import ExpensesList from './ExpensesList'
import ExpenseChart from '../Chart/ExpenseChart'
export default function Expenses({expenses}) {
    const [filteredYear, setFilteredYear] = useState(2020)
    const filterChangehandler=(selectedYear)=>{
        setFilteredYear(selectedYear)
    }
    const filteredExpenses=expenses.filter((expense)=>{
            return expense.date.getFullYear().toString()===filteredYear
    })
    return (
        <div>
        <Card className="expenses">
        <ExpenseFilter onFilterChangeHandler={filterChangehandler} selected={filteredYear} />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />            
            
        </Card>
        </div>
    )
}
