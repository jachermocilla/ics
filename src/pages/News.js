import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './News.css';
import Breadcrumbs from '../layout/Breadcrumbs';

// import newsMD from '../md/News.md';
// import newsMD from '/md/News.md';

export default class News extends Component {

  constructor(props) {
    super(props)
    this.state = {
      markdown: ''
    }
  }

  componentWillMount() {
    // console.log('File path: ' + newsMD)

    fetch('/md/News.txt')
      .then(response => response.clone().text())
      .then(content => {
        this.setState({ markdown: content })
      })
  }

  render() {
    return (
      <div>
        <Breadcrumbs crumbs={[{ text: 'News Feed' }]}/>
        <ReactMarkdown source={this.state.markdown} />
      </div>
    )
  }
}
