import React, { Component } from "react";
import TodoList from "./TodoList";
import Sections from "./Sections"
export class Ui extends Component {
  constructor() {
    super();
    this.state = {
      allTasks: [
        {
          title: "",
        },
      ],
      inputText: "",
    };
  }

  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
    // console.log(this.state.inputText);
  };

  handleSubmit = () => {
    // e.preventDefault();
    if (window.confirm("Please confirm") === true) {
      this.setState({
        allTasks: [...this.state.allTasks, { title: this.state.inputText }],
      });
      this.setState({ inputText: "" });
    } else {
      this.setState({ inputText: "" });
    }
  };
  render() {
    console.log(this.state.allTasks);
    return (
      <>
        <navbar style={{fontSize:"2rem",fontWeight:"bold" }}>Work Management</navbar>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <textarea
            style={{ fontSize: "1rem" }}
            type="text"
            rows="4"
            cols="50"
            placeholder="Enter your Task"
            onChange={this.handleChange}
            value={this.state.inputText}
          ></textarea>
          <button
            onClick={this.handleSubmit}
            style={{ width: "4rem", height: "3rem", margin: "1rem", border:".1px solid white" }}
          >
            Submit
          </button>
        </section>
        <TodoList
        //  allTasks={this.state.allTasks}
         />
        <Sections allTasks={this.state.allTasks}/>
      </>
    );
  }
}

export default Ui;
