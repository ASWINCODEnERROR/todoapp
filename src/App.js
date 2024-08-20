import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoApp from './component/TodoApp/TodoApp';
import About from './component/About/About';
import Header from './component/Header/Header';
import Home from './component/Home/Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/todo"  element={<TodoApp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
