import React, { Component } from "react";
import QuoteText from "./QuoteText";
import QuoteAuthor from "./QuoteAuthor";
import axios from "axios";
import "../App.css";

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = { apiQuotes: [], author: "", text: "" };
    this.newQuote = this.newQuote.bind(this);
    this.getQuotes = this.getQuotes.bind(this);
    this.tweetQuote = this.tweetQuote.bind(this);
  }

  newQuote() {
    // Pick a random quote from apiQuotes array
    const randomQuote = Math.floor(Math.random() * this.state.apiQuotes.length);
    const quote = this.state.apiQuotes[randomQuote];

    // Check if Author field is blank and replace it with Unknown
    const author = quote.author ? quote.author : "Unknown";
    const text = quote.text;
    this.setState({ author: author, text: text });
  }

  // Get Quotes from API
  async getQuotes() {
    try {
      const apiUrl = "https://type.fit/api/quotes";
      const res = await axios.get(apiUrl);
      this.setState({ apiQuotes: res.data });
      this.newQuote();
    } catch (err) {
      console.error("Ooops something went wrong! 😭😭", err.message);
    }
  }

  componentDidMount() {
    this.getQuotes();
  }

  tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${this.state.text} - ${this.state.author}`;
    window.open(twitterUrl, "_blank");
  }

  render() {
    return (
      <div className="Quote">
        <QuoteText text={this.state.text} />
        <QuoteAuthor author={this.state.author} />
        <div className="button-container">
          <button
            onClick={this.tweetQuote}
            className="twitter-button"
            id="twitter"
            title="Tweet This!"
          >
            <i className="fab fa-twitter"></i>
          </button>
          <button onClick={this.newQuote} id="new-quote">
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default Quote;
