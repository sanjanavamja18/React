import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { BsFillTrashFill } from "react-icons/bs";
import "./App.css";

function App() {
  //tasks sate
  const [toDo, setToDo] = useState([
    { id: 1, title: "Test 1", type: "", status: false },
    { id: 2, title: "Test 2", type: "", status: false },
  ]);

  //temp state
  const [newTask, setNewTask] = useState(" ");
  //const [newOption, setNewOption] = useState(" ");

  //add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = {
        id: num,
        title: newTask,
        status: false,
      };
      setToDo([...toDo, newEntry]);
      setNewTask(" ");
      console.log(newEntry);
    }
  };

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
        toDo
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                    <span className="taskType">{task.type}</span>
                  </div>
                  <div>
                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      <button type="submit" className="btn">
                        Delete
                      </button>
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
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
      <select>
        <option
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          disabled
          selected
        >
          Select Transaction Type
        </option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <br></br>
      <label className="font-bold">Value</label>
      <br></br>
      <input
        type="number"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
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
