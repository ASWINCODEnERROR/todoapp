import React from 'react';
import "./Header.css"
import { Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
        <Link to="/">Home</Link>
        <Link to="/todo">Todo App</Link>
        <Link to="/about">About</Link>
    </header>
  )
}

export default Header; 
