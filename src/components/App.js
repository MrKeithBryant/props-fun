import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import BaseLayout from './BaseLayout';
import ParentComponent from './ParentComponent';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout></BaseLayout>
        <Header />
        <ParentComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
