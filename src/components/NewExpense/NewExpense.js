import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (props) => {
    
    const SaveExpenseDataHandler = inputExpenseData => {
        const expenseData = {
            ...inputExpenseData, 
            id: (Math.random()*100).toFixed().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData)
    }

    return (
        <div className = "new-expense">
            <ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler}/>
        </div>
    )
};

export default NewExpense