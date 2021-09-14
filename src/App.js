import Expenses from './components/Expenses/Expenses';

function App() {
	const expenses = [
		{
			id: 'i1',
			title: 'Petrol',
			amount: '3210',
			date: new Date(2021, 9, 6)
		},
		{
			id: 'i2',
			title: 'Zomato',
			amount: '310',
			date: new Date(2021, 8, 26)
		},
		{
			id: 'i3',
			title: 'Wifi',
			amount: '800',
			date: new Date(2021, 9, 1)
		},
		{
			id: 'i4',
			title: 'Flight',
			amount: '9820',
			date: new Date(2021, 8, 16)
		},
	];

	return (
		<div>
			<h2>Let's get Started</h2>
			<Expenses items={expenses} />
      </div>
	);
};

export default App;
