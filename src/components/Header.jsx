import React from 'react'
import { Link } from 'react-router-dom'




const Header = () => {


    return (
        <header className='container-xl header d-flex justify-content-between align-items-center'>
            <div className='logo'>
                <h1>
                    <Link to={'/'} className="text-decoration-none">
                    Locked n' Loaded
                    </Link>
                </h1>
            </div>
            <nav className='nav'>
                <div className='menu-gap gap-4 d-flex'>
                    <ul className='nav-menu list-unstyled d-flex gap-4 m-0 p-0 align-items-end'>
                        <li className="menu-link">
                            <Link to={ '/' } className='text-decoration-none'>
                                Home
                            </Link>
                        </li>
                        {/* <li className="menu-link">
                            <a href="
                            " className='text-decoration-none'>
                                About
                            </a>
                        </li> */}
                        <li className="menu-link">
                            <Link to={ '/shopnow' } className='text-decoration-none'>
                                Products
                            </Link>
                        </li>
                    </ul>
                    <ul className="cart-user-menu list-unstyled d-flex gap-4 m-0 p-0">
                        <li className="menu-user">
                            <a href="
                            " className='text-decoration-none'>
                                <i className="bi bi-cart2"></i>
                            </a>
                        </li>
                        <li className="menu-user">
                        <a href="
                            " className='text-decoration-none'>
                                <i className="bi bi-person-circle"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div className='hamburger-menu'>  {/* for later part*/}
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    )
}

export default Header
