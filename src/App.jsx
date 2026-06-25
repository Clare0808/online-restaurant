import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import HomePage from "./components/HomePage";
import DishPage from "./components/DishPage";
import ReviewPage from "./components/ReviewPage";
import ProblemPage from "./components/ProblemPage";
import CartPage from "./components/CartPage";
import UserPage from "./components/UserPage";
import StartPage from './components/StartPage';

import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import "./App.css";

import bgImg from "./assets/img/background.jpg";

function App() {
  return (
    <>
      <StartPage />
      <div style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", height: "auto" }}
      >
        <Router>
          <nav>
            <div className="logo">Le Savor 西饗</div>
            <div className="text-func">
              <Link to="/">主頁</Link>
              <Link to="/dish">菜單</Link>
              <Link to="/review">評論</Link>
              <Link to="/problem">客服中心</Link>
            </div>
            <div className="icon-func">
              <Link to="/cart">
                <FaShoppingCart />
              </Link>
              <Link to="/user">
                <FaUser />
              </Link>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/dish" element={<DishPage />}></Route>
            <Route path="/review" element={<ReviewPage />}></Route>
            <Route path="/problem" element={<ProblemPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/user" element={<UserPage />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
