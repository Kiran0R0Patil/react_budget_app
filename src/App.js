import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// imported the other components 
import { AppProvider } from './context/AppContext';
import RemainingBudget from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';

const App = () => 
{
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */}        
                        <div className='col-sm'>
                            <Budget />
                        </div>
                        {/* Added Remaining component here */}        
                        <div className='col-sm'>
                            <RemainingBudget />
                        </div>
                        {/* Added ExpenseTotal component here */}        
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                    </div> 
                    <h3 className='mt-3'>Allocation</h3>
                        {/* Added ExpenseList component here */}         
                    <div className='row '>
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>
                    </div>
                        {/* Added ExpenseItem component here  */}        
                        <div className='col-sm'>
                            <ExpenseItem />
                        </div>
                        {/* Added AllocationForm component here */}        
                    <h3 className='mt-3'>Change allocation</h3>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <AllocationForm/>
                        </div>
                    </div>
            </div>
        </AppProvider>
            );
};
export default App;

