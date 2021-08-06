import "./ExpensesList.css"
import ExpenseItems from "./ExpenseItem"
export default function ExpensesList(props) {
    if(props.filteredExpenses.length===0){
        return <h2 className="expenses-list__fallback">Got no Expenses</h2>
    }
    return (
        <ul className="expenses-list">
        {
            props.filteredExpenses.map((expense)=>{
                return(
                    <ExpenseItems title={expense.title} amout={expense.amount} date={expense.date} key={expense.id} />
                )
            })
        }
        </ul>
    )
}
