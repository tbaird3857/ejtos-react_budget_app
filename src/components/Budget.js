import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, expense) =>
    {
        return total+=expense.cost;
    },0);

    const updateBud = (newBudget) => 
    {
        dispatch({type:'SET_BUDGET', payload: newBudget});
        
        if(newBudget < totalExpenses) {
            alert("Cannot reduce the budget value lower than the spending");}
        if(newBudget > 20000) {
            alert("Value cannot exceed 20000")
        }
    }

    

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input
                        required='required'
                        type='number'
                        id='cost'
                        value={budget}
                        step = "10"
                        max = "20000"
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => updateBud(event.target.value)}>
            </input>
        </div>
    );
};
export default Budget;


                        