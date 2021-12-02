import React, { Component } from "react";

class QuoteAuthor extends Component {
  render() {
    return (
      <div className="QuoteAuthor">
        <span id="author">{this.props.author}</span>
      </div>
    );
  }
}

export default QuoteAuthor;
