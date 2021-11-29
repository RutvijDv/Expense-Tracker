import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    enteredExpenseData.id = "e" + Math.floor(Math.random() * 100);

    props.onAddExpense(enteredExpenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={startEditingHandler}>Add New Expense</button>
      </div>
    );
  }
}

export default NewExpense;
