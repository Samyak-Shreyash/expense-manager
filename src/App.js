import ExpenseItem  from "./components/ExpenseItem";
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
      date: new Date(2021,8, 26)
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
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title = {expenses[0].title} date = {expenses[0].date} price = {expenses[0].amount}/>
      <ExpenseItem title = {expenses[1].title} date = {expenses[1].date} price = {expenses[1].amount}/>
      <ExpenseItem title = {expenses[2].title} date = {expenses[2].date} price = {expenses[2].amount}/>
      <ExpenseItem title = {expenses[3].title} date = {expenses[3].date} price = {expenses[3].amount}/>
      </div>
  );
}

export default App;
