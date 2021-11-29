import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    enteredExpenseData.id = "e" + Math.floor(Math.random() * 100);
    enteredExpenseData.date = new Date(enteredExpenseData.date);

    props.onAddExpense(enteredExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
