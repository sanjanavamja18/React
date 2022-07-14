import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div>
        <div className="h-screen grid place-items-center ">
          <figure>
            <figcaption className="bold">Add new Transaction</figcaption>
          </figure>
          <label class="whitespace-normal">Description</label>
          <input type="text" placeholder="Enter Description" id="" />
          <label>Transaction Type</label>
          <input type="text" placeholder="Select Transaction Type" id="" />
          <label>Value</label>
          <input type="text" placeholder="$" id="" />
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
