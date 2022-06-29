import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  State = {
    Persons: [
      { id: "asdf", name: "sanju", age: 21 },
      { id: "fgh", name: "mansi", age: 22 },
      { id: "dfgd", name: "hemu", age: 23 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  //const [otherState, setOtherState] = useState("some other value");

  //console.log(PersonsState);
  // switchNameHandler = (newName) => {
  //   //console.log("Button Was Clicked !");
  //   this.setState({
  //     Persons: [
  //       { name: newName, age: 27 },
  //       { name: "mansaa", age: 28 },
  //       { name: "hemaxi", age: 29 },
  //     ],
  //   });
  // };

  nameChangedHandler = (event, id) => {
    const Person = this.State.Persons.find();
    this.setState({
      Persons: [
        { name: "sanjana", age: 27 },
        { name: event.target.value, age: 28 },
        { name: "mans", age: 29 },
      ],
    });
  };

  deletePersonsHandler = (personIndex) => {
    //const Persons = this.State.Persons;
    const Persons = [...this.State.Persons];
    Persons.splice(personIndex, 1);
    this.setState({ Persons: Persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.State.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let Person = null;

    if (this.State.showPersons) {
      Person = (
        <div>
          {this.state.Persons.map((Persons, index) => {
            return (
              <Person
                click={() => this.deletePersonsHandler(index)}
                name={Person.name}
                age={Person.age}
                key={Person.id}
                changed={(event) => this.nameChangedHandler(event, Person.id)}
              />
            );
          })}
          {/* <Person
            name={this.State.Persons[0].name}
            age={this.State.Persons[0].age}
          ></Person>
          <Person
            name={this.State.Persons[1].name}
            age={this.State.Persons[1].age}
          ></Person>
          <Person
            name={this.State.Persons[2].name}
            age={this.State.Persons[2].age}
            click={this.switchNameHandler.bind(this, "Motu!!")}
            changed={this.nameChangedHandler}
          >
            My hoobie : Cooking !!
          </Person> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hey..I'm am React App.</h1>
        <p>This is really Worked!!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
      </div>
    );
  }
}
export default App;
