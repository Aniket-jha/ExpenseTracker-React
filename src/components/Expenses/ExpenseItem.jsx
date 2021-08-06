import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Cards"

export default function Expenseitem(props) {
  const { title, amout, date } = props;
  // const filterDateHandler=(filterDate)=>{
  //   const [filteredDate,setFilteredDate]=useState(filterDate)
  // }
  return (
    <ul>
     <Card className="expense-item">
        <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amout}</div>
      </div>
    </Card>
    </ul>
  );
}
