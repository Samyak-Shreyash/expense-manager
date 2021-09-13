import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate';
function ExpenseItem(expense) {
    const expenseCurr ="Rs."
	return (
		<div className="expense-item">
			<ExpenseDate date = {expense.date}/>
			<div className = "expense-item__description">
				<h2>{expense.title}</h2>
			<div className = "expense-item__price">{expenseCurr} {expense.price}</div>
            </div>
		</div>
	);
}

export default ExpenseItem;
