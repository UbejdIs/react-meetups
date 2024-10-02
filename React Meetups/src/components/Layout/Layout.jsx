import { Link, Outlet } from "react-router-dom"

import AddCart from "../AddCart/AddCart"
import Home from "../HomePage/Home"
import FavoritePage from "../FavoritesPage/FavoritePage"

import "./Layout.css"

function Layout() {
    return (
        <>
        
            <div className="navbar">
                <h1 className="header">React Meetups</h1>
                <div className="nav-links">
                    <Link to='/'>All Meetups</Link>
                    <Link to='AddCart'>Add New Meetup</Link>
                    <Link to='favorite'>My Favorites</Link>
                    <p>0</p>
                </div>            
            </div>
            <Outlet/>
        
        </>
    )
}

export default Layout
