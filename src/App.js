import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';

// LAYOUT
import Header from './layout/Header';
import Footer from './layout/Footer';
// import TopBar from './layout/TopBar';

// PAGES
import Home from './pages/Home';
import News from './pages/News';
import NewsSingle from './pages/NewsSingle';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      newsData: []
    }
  }

  componentWillMount() {
    fetch('/md/news-aggregate.json')
      .then(content => content.json())
      .then(json => {
        this.setState({ newsData: json })
      });
  }

  render() {
    const { newsData } = this.state;

    return (
      <div>
        {/* <TopBar /> */}
        <Header />

        <main>
          <BrowserRouter>
            <Container id="main-container">
              <Row>
                <Col xs={12}>
                  <Route
                    path="/"
                    exact={true}
                    newsData={newsData}
                    component={Home} />

                  <Route
                    path="/newsfeed"
                    exact={true}
                    newsData={newsData} component={() => <News newsData={newsData} /> } />

                  <Route
                    path="/news/:date"
                    component={NewsSingle} />
                </Col>
              </Row>
            </Container>
          </BrowserRouter>
        </main>

        <Footer />
      </div>
    )
  }
}
