import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const expenseArr = [
	{
		id: '213',
		title: 'Petrol',
		amount: '3210',
		date: '2021-09-06'
	},
	{
		id: '312',
		title: 'Zomato',
		amount: '310',
		date: '2020-08-26'
	},
	{
		id: '364',
		title: 'Wifi',
		amount: '800',
		date: '2021-09-01'
	},
	{
		id: '314',
		title: 'Flight',
		amount: '9820',
		date: '2021-08-16'
	},
];

function App() {

	const [expenses, setExpenses] = useState(expenseArr)

	const addExpenseHandler = expense => {
		console.log('In App.js ');
		setExpenses(prevExpenses => {
			return [expense, ...prevExpenses];
		});
	};
	

	return (
		<div>
			<NewExpense onAddExpense = {addExpenseHandler} />
			<Expenses items={expenses} />
      </div>
	);
};

export default App;
