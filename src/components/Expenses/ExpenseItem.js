
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(expense) {
let expenseCurr = 'Rs.';

	return (
		<Card className="expense-item">
			<ExpenseDate date={expense.date} />
			<div className="expense-item__description">
				<h2>expense.title</h2>
				<div className="expense-item__price">
					{expenseCurr} {expense.price}
				</div>
				<button>Change Tile</button>
			</div>
		</Card>
	);
}

export default ExpenseItem;
