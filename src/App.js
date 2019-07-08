import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

// LAYOUT
import Header from './layout/Header';
import Footer from './layout/Footer';
import TopBar from './layout/TopBar';

// PAGES
import Home from './pages/Home';
import News from './pages/News';

function App() {
  return (
    <div>
      {/* <TopBar /> */}
      <Header />

      <main>
        <BrowserRouter>
          <div>
            <Route path="/" exact={true} component={Home} />
            <Route path="/news" exact={true} component={News} />
          </div>
        </BrowserRouter>
      </main>

      <Footer />
    </div>
  );
}

export default App;
