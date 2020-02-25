import React from 'react';
import './styles/App.scss';
import Header from './Blocks/Header/Header';
import Footer from './Blocks/Footer/Footer';
import Featured from './Blocks/Featured/Featured';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Container</h1>
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
