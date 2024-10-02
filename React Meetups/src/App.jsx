import { BrowserRouter, Route, Routes } from "react-router-dom";

import FavoritePage from "./components/FavoritesPage/FavoritePage";
import Home from "./components/HomePage/Home";
import Layout from "./components/Layout/Layout"
import AddCart from "./components/AddCart/AddCart";

import "./App.css"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorite" element={<FavoritePage/>}/>
          <Route path="/addCart" element={<AddCart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
