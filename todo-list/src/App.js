import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCircleCheck,
//   faPen,
//   faTrashCan,
// } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  //tasks sate
  const [toDo, setToDo] = useState([
    { id: 1, title: "Expense", status: false },
    { id: 2, title: "Income", status: false },
  ]);

  //temp state
  const [newTask, setNewTask] = useState(" ");
  const [updateData, setUpdateData] = useState(" ");

  //add task
  const addTask = () => {};

  //delete task
  const deleteTask = () => {};

  //mark task as done or complted
  const markDone = (id) => {};

  //cancel update
  const cancelUpdate = () => {};

  //change task for update
  const changeTask = (e) => {};

  //update task
  const updateTask = () => {};

  return (
    <div className="container App">
      <br></br>
      <h2>Budget</h2>
      {/* Display todo's */}
      {toDo && toDo.length ? " " : "No Tasks..!!"}

      {toDo &&
        toDo.map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                <div className={task.status ? "done" : ""}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.title}</span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
}
export default App;
