import React from 'react';
 import './App.css';

 //Components
 import Header from './Components/HeaderComponent/header';
 import Footer from './Components/FooterComponent/footer';
 import HomePage from './Components/Pages/homePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
