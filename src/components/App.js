import React from 'react';
import '../styles/App.css';
import Header from './Header';
import BaseLayout from './BaseLayout';
import ParentComponent from './ParentComponent';
import Footer from './Footer';


export default () => (
  <div className="App">
    <BaseLayout></BaseLayout>
    <Header />
    <ParentComponent />
    <Footer />
  </div>
);
