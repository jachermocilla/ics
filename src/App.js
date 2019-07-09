import React from 'react';
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

function App() {
  return (
    <div>
      {/* <TopBar /> */}
      <Header />

      <main>
        <BrowserRouter>
          <Container id="main-container">
            <Row>
              <Col xs={12}>
                <Route path="/" exact={true} component={Home} />
                <Route path="/newsfeed" exact={true} component={News} />
                <Route path="/news/:date" component={NewsSingle} />
              </Col>
            </Row>
          </Container>
        </BrowserRouter>
      </main>

      <Footer />
    </div>
  );
}

export default App;
