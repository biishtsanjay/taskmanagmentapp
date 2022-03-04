import React from "react";
import axios from "axios";
class Simple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleText: "Old simple show text",
      simpleArray: [],
      showArray: false,
    };
  }
  handleText = () => {
    this.setState({ showArray: false });
    this.setState({ simpleText: "New Text Is Here" });
  };
  handleArray = async () => {
    this.setState({ showArray: true });
    const fetchData = await axios.get(
      "https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10"
    );
    console.log(fetchData);

    this.setState({ simpleArray: fetchData.data });
    this.setState({ simpleText: "New Text is Here" });
  };

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <button onClick={this.handleText}>Show Text</button>
          <button onClick={this.handleArray}>Show Array</button>
        </div>
        <p>{this.state.simpleText}</p>
        {this.state.showArray &&
          this.state.simpleArray.map((item) => {
            return (
              <>
                <h2>{item.name}</h2>
                <p>{item.email}</p>
              </>
            );
          })}
      </>
    );
  }
}
export default Simple;
