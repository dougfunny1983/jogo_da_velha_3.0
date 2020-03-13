import React, { Component } from "react";

export default class Cell extends Component {
  render() {
    const { value, onClick, auto  } = this.props;
    return (
      <div  data-testid={auto} className="celula" onClick={onClick}>
        {value}
      </div>
    );
  }
}
