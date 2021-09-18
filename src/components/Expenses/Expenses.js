import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
	const [ filteredYear, setFilteredYear ] = useState(new Date().getFullYear().toString());

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return new Date(expense.date).getFullYear().toString() === filteredYear;
	});

	return (
		<div>
		<Card className = 'expenses'>
			
			<ExpensesFilter 
			selected={filteredYear} 
			onChangeFilter={filterChangeHandler} 
			/>
			<ExpensesList items={filteredExpenses}/>
		</Card>
		</div>
	);
};

export default Expenses;
