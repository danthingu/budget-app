import React from "react";
import BalanceDisplay from './BalanceDisplay';
import ExpenseList from './ExpenseList';

const budgetInfoHeaderDisplayStyle = {
    margin: "-20px -20px 20px -20px",
    padding: "20px 0px",
    color: "white",
    fontFamily: "cursive",
    background: "#e42525",
}
const DisplayBudget = () => {
    return (
        <div className="card card-body">
            <h3 className="text-center" style={budgetInfoHeaderDisplayStyle}>Your Budget Info</h3>
            <BalanceDisplay />
            <ExpenseList />
        </div>
    )
}

export default DisplayBudget