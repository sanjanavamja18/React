import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    Persons: [
      { name: "sanju", age: 21 },
      { name: "mansi", age: 22 },
      { name: "hemu", age: 23 },
      { name: "mahek", age: 18 },
    ],
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log("Button Was Clicked !");
    setPersonsState({
      Persons: [
        { name: "sanjana", age: 27 },
        { name: "mansaa", age: 28 },
        { name: "hemaxi", age: 29 },
        { name: "om", age: 13 },
      ],
    });
  };
  return (
    <div className="App">
      <h1>Hiii,I'm am React App.</h1>
      <p>This is really Worked!!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.Persons[0].name}
        age={personsState.Persons[0].age}
      ></Person>
      <Person
        name={personsState.Persons[1].name}
        age={personsState.Persons[1].age}
      ></Person>
      <Person
        name={personsState.Persons[2].name}
        age={personsState.Persons[2].age}
        click={switchNameHandler}
      >
        My hoobie : Cooking !!
      </Person>
      <Person
        name={personsState.Persons[3].name}
        age={personsState.Persons[3].age}
      ></Person>
    </div>
  );
};

export default App;
