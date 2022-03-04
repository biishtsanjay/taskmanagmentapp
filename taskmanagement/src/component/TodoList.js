import React, { Component } from "react";

export class TodoList extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>
          {this.props.allTasks !== undefined && this.props.allTasks.map((task) => {
            return (
              <>
                {task.title && (
                  <p
                    style={{
                      width: "25vw",
                      // height: "5vh",
                      margin: "1rem",
                      padding: "1rem",
                      backgroundColor: "yellow",
                      borderRadius: ".5rem",
                    }}
                  >
                    {task.title}
                  </p>
                )}
              </>
            );
          })}
        </p>
      </div>
    );
  }
}

export default TodoList;
