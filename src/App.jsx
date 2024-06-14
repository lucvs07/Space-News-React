import { ArticleList } from './components/Article List/ArticleList';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';

import './styles/App.css';
import React from 'react';


function App() {
  return (
    <>
      <Navbar />
      <ArticleList/>
      <Footer/>
    </>
  );
}

export default App;
