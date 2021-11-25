import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpensesDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpensesDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.item}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;