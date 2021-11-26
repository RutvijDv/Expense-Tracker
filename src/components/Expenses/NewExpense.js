import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    props.onAddExpense(enteredExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
