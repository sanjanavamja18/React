import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  //tasks sate
  const [toDo, setToDo] = useState([
    // { id: 1, title: "Test 1", cost: "100", type: "Expence", status: false },
    // { id: 2, title: "Test 2", cost: "200", type: "Income", status: false },
  ]);

  //temp state
  const [newTask, setNewTask] = useState(" ");

  //add cost
  const [newCost, setNewCost] = useState(" ");

  //add type
  const [newType, setNewType] = useState("income");

  //income
  const [newIncome, setNewIncome] = useState(0);

  //expense
  const [newExpence, setNewExpence] = useState(0);

  //total
  //const [newTotal, setNewTotal] = useState(0);

  //add task
  const addTask = () => {
    if (newTask && newCost && newType) {
      let num = toDo.length + 1;
      let newEntry = {
        id: num,
        title: newTask,
        cost: newCost,
        type: newType,
        status: false,
      };

      if (newType === "income") {
        setNewIncome(+newCost + +newIncome);
      } else {
        setNewExpence(+newCost + +newExpence);
      }
      setToDo([...toDo, newEntry]);
      setNewTask(" ");
      setNewCost(" ");
      setNewType("income");
      //setNewTotal(newIncome - newExpence);

      //console.log(newTotal);
      console.log(newEntry);
    }
  };

  // const sum = newEntry.reduce((newtotal, object) => {
  //   return newtotal + object.cost;
  // }, 0);

  // const addCost = () => {
  //   if
  // };
  //delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  return (
    <div className="container App">
      <br></br>
      <h2>Budget</h2>
      <br></br>

      {/* Display todo's */}
      {toDo && toDo.length ? " " : "No Tasks..!!"}

      {toDo &&
        toDo.map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                <div className="text">
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.title}</span>
                  <span className="taskCost">${task.cost}</span>
                  <span className="tasktype">{task.type}</span>
                </div>
                <div className="button_div">
                  <button
                    type="submit"
                    title="Delete"
                    onClick={() => deleteTask(task.id)}
                    className="btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </React.Fragment>
          );
        })}

      <h3>Total Balance:</h3>
      <h3>{newIncome - newExpence}</h3>
      <div>
        <div className="income">
          <h5>Income</h5>
          <h5>{newIncome}</h5>
        </div>
        <div className="expense">
          <h5>Expense</h5>
          <h5>{newExpence}</h5>
        </div>
      </div>
      <br></br>
      <h3>Add new Transaction</h3>

      <br></br>
      <label className="font-bold">Description</label>
      <br></br>
      <input
        type="text"
        placeholder="Enter Description"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        id=""
      />
      <br></br>
      <label className="font-bold">Transaction Type</label>
      <br></br>
      <select value={newType} onChange={(e) => setNewType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <br></br>
      <label className="font-bold">Value</label>
      <br></br>

      <input
        type="number"
        value={newCost}
        onChange={(e) => setNewCost(e.target.value)}
        placeholder="$"
        id=""
      />
      <br></br>
      <br></br>
      <button
        title="Submit"
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded color:white"
        onClick={addTask}
      >
        Submit
      </button>
    </div>
  );
}
export default App;
