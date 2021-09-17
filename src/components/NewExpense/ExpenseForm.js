import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  // using individual state for each of the component
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // using a single state for all the components
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    // using individual state for each of the component
    setEnteredTitle(event.target.value);

    // // using a single state for all the components
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // })

    // react always schedules the updates.
    // It is important to have the latest previous state snapshot
    // Replacement of above logic

    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle:event.target.value};
    // })
  };

  const amountChangeHandler = (event) => {
    // using individual state for each of the component
    setEnteredAmount(event.target.value);

    // // using a single state for all the components
    // setUserInput({
    //     ...userInput, //copy the exisitng state and overwrite the value
    //     enteredAmount: event.target.value
    // })

    // react always schedules the updates.
    // It is important to have the latest previous state snapshot
    // Replacement of above logic

    // setUserInput((prevState) => {
    //     return {...prevState, enteredAmount:event.target.value};
    // })
  };

  const dateChangeHandler = (event) => {
    // using individual state for each of the component
    setEnteredDate(event.target.value);

    // // using a single state for all the components
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // })

    // react always schedules the updates.
    // It is important to have the latest previous state snapshot
    // Replacement of above logic

    // setUserInput((prevState) => {
    //     return {...prevState, enteredDate: event.target.value};
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />{" "}
        </div>{" "}
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="0.1"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
