import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
	const [ filteredYear, setFilteredYear ] = useState(new Date().getFullYear().toString());

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	const years =Array.from(new Set(props.items.map( expense => new Date(expense.date).getFullYear())))
	years.sort((a,b) => (a-b));
	const filteredExpenses = props.items.filter((expense) => {
		return new Date(expense.date).getFullYear().toString() === filteredYear;
	});

	return (
		<div>
		<Card className = 'expenses'>
			
			<ExpensesFilter 
			years={years}
			selected={filteredYear} 
			onChangeFilter={filterChangeHandler} 
			/>
			<ExpensesChart expenses = {filteredExpenses} />
			<ExpensesList items={filteredExpenses}/>
		</Card>
		</div>
	);
};

export default Expenses;
