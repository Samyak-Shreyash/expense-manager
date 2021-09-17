import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = props => {
	const currYear = new Date().getYear()+1900;
	const [filteredYear, setFilteredYear] = useState(currYear.toString());

	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};
	return (
		<Card>
			<ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />
			{props.items.map(expense => <ExpenseItem title={expense.title} date={expense.date} price={expense.amount}/>)} 	
			{/* <ExpenseItem title={props.items[0].title} date={props.items[0].date} price={props.items[0].amount} />
			<ExpenseItem title={props.items[1].title} date={props.items[1].date} price={props.items[1].amount} />
			<ExpenseItem title={props.items[2].title} date={props.items[2].date} price={props.items[2].amount} />
			<ExpenseItem title={props.items[3].title} date={props.items[3].date} price={props.items[3].amount} />  */}
		</Card>
	);
};

export default Expenses;
