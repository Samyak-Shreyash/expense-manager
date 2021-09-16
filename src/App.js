import { Temporal } from 'proposal-temporal';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
	const expenses = [
		{
			id: 'i1',
			title: 'Petrol',
			amount: '3210',
			date: new Temporal.PlainDate(2021, 9, 6)
		},
		{
			id: 'i2',
			title: 'Zomato',
			amount: '310',
			date: new Temporal.PlainDate(2021, 8, 26)
		},
		{
			id: 'i3',
			title: 'Wifi',
			amount: '800',
			date: new Temporal.PlainDate(2021, 9, 1)
		},
		{
			id: 'i4',
			title: 'Flight',
			amount: '9820',
			date: new Temporal.PlainDate(2021, 8, 16)
		},
	];

	const addExpenseHandler = expense => {
		console.log('In App.js');
		console.log(expense);
	};
	
	return (
		<div>
			<NewExpense onAddExpense = {addExpenseHandler} />
			<Expenses items={expenses} />
      </div>
	);
};

export default App;
