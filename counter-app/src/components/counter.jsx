import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    //people: ["Patrick", "Aaron", "Maeve"]
    people: []
  };

  constructor() {
    super();
    this.HandleOnClick = this.HandleOnClick.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.people.length === 0 && "Please add some people"}

        <span className={this.CalculateClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.HandleOnClick}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>{this.RenderTags()}</ul>
      </React.Fragment>
    );
  }

  HandleOnClick() {
    this.setState({ count: this.state.count + 1 });
    console.log("The button has been clicked, increment the counter.");
  }

  RenderTags() {
    if (this.state.people.length === 0) return <p>There are no people</p>;

    return this.state.people.map(p => <li key={p}>{p}</li>);
  }

  CalculateClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
