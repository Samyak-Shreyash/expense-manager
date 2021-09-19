import './ExpensesFilter.css'

const ExpensesFilter = (props) => {

    const selectChangeHandler = event => {
        props.onChangeFilter(event.target.value)
    }
   const genOptions = props.years.map(year => (
        <option value ={year.toString()}>{year}</option>
    ));
    return (
        <div className = "expenses-filter">
            <div className ="expenses-filter__control">
                <label>Filter by Year</label>
                <select value={props.selected} onChange = {selectChangeHandler}>
                    {genOptions}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;