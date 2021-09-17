import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
	const [ filteredYear, setFilteredYear ] = useState(new Date().getFullYear().toString());

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return new Date(expense.date).getFullYear().toString() === filteredYear;
	});

	let expenseContent = <p>No Expenses for this year</p>;

	if (filteredExpenses.length > 0) {
		expenseContent = filteredExpenses.map((expense) => (
			<ExpenseItem 
			key={expense.id} 
			title={expense.title} 
			date={expense.date} 
			price={expense.amount} 
			/>
		));
	}

	return (
		<div>
		<Card className = 'expenses'>
			<ExpensesFilter 
			selected={filteredYear} 
			onChangeFilter={filterChangeHandler} 
			/>
			{expenseContent}
		</Card>
		</div>
	);
};

export default Expenses;
