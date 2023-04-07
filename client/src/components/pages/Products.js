
import React from 'react'
// import Cpu from './products/Cpu'
// import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import {  Link } from 'react-router-dom'
// import {Nav} from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
// import Cpu from './products/Cpu'


function Products() {
    return (
        <>
            <div className='w-100 h-100 bg-danger'>
                {/* 
                        ถ้าจะต่อ path จากหน้านี้ไม่ต้องใส่ "/" 
                        <Link to="cpu">cpu</Link>
                */}
                <Link to="/product/cpu">Cpu</Link>
                <Link to="/product/ram">Ram</Link>
                <Link to="/">Home</Link>

                <Outlet />

            </div>
        </>
    )
}

export default Products