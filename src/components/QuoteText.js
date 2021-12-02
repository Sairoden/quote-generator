import React, { Component } from "react";

class QuoteText extends Component {
  render() {
    const textLength = this.props.text.length > 120 ? "long-quote" : "";

    return (
      <div className="QuoteText">
        <i className="fas fa-quote-left"></i>
        <span id="quote" className={textLength}>
          {this.props.text}
        </span>
      </div>
    );
  }
}

export default QuoteText;
