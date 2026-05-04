// src/App.jsx

import React from "react";

import './App.css'

import MainPage from "./pages/main/mainPage";
import ViewProject from './pages/projects/projects'
import { Routes,Route } from "react-router-dom";

function App() {
  return (
  

<Routes>
    <Route path ="/" element ={<MainPage/>}/>
  
    <Route path="/viewproject" element={<ViewProject/>} />
</Routes>
 

  );
}

export default App;