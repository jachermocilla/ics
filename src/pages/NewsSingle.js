import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './News.css';

export default class NewsSingle extends Component {

  constructor(props) {
    super(props)
    this.state = {
      markdown: '',
      date: this.props.match.params.date
    }
  }

  componentWillMount() {
    fetch(`/md/News/${this.state.date}.md`)
      .then(response => response.clone().text())
      .then(content => {
        if (content.substring(0,9) === "<!DOCTYPE") {
          this.setState({ markdown: '# Page Not Found' })
        }

        else {
          this.setState({ markdown: content })
        }
      })
  }

  render() {
    return (
      <div>
        <ReactMarkdown source={this.state.markdown} />
      </div>
    )
  }
}
