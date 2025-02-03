import React from 'react'
import '../App.css'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='app'>
            <div className='inp'>
                <Link to="/uditok"><input type="button" value="Üdítők" className='i'/></Link>
                <Link to="/szerkeszt"><input type="button" value="Szerkeszt" className='i'/></Link>
                <Link to="/nevjegy"><input type="button" value="Névjegy" className='i r'/></Link>
            </div>
            <div className=''>
                <Outlet />
            </div>
        </div>
    )
}
