import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    //people: ["Patrick", "Aaron", "Maeve"]
    people: []
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.CalculateClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>{this.RenderTags()}</ul>
      </React.Fragment>
    );
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
