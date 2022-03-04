import React, { Component } from "react";
import TodoList from "./TodoList";

export class Sections extends Component {
  render() {
    return (
      <>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: " repeat(3, 1fr)",
            gridColumnGap: ".2rem",
            flexDirection: "row",
            justifyContent: "space-around",
            minHeight: "70vh",
            // border: "1px solid black",
          }}
        >
          <section
            name="todo"
            style={{
              border: "1px solid black",
              backgroundColor: "grey",
              width: "30vw",
            }}
          >
            <h2 style={{ backgroundColor: "maroon", margin: "auto", padding:"10px" }}>
              Todo Task
            </h2>
            <TodoList allTasks={this.props.allTasks} />
          </section>
          <section
            name="inProgress"
            style={{
              border: "2px solid red",
              maxWidth: "30vw",
              backgroundColor: "blue",
            }}
          >
            <h2 style={{ backgroundColor: "maroon", margin: "auto", padding:"10px" }}>
              In Progress Task
            </h2>
          </section>
          <section
            name="completed"
            className=""
            style={{
              border: "1px solid black",
              maxWidth: "30vw",
              backgroundColor: "green",
            }}
          >
            <h2 style={{ backgroundColor: "maroon", margin: "auto", padding:"10px" }}>
              Completed Task
            </h2>
          </section>
        </div>
      </>
    );
  }
}

export default Sections;
