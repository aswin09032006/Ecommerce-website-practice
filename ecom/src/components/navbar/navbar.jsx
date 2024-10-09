import React, { useEffect, useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ cartItemCount }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <a href="/"><p>Veloura</p></a>
            </div>
            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} style={{ display: isMobile && !menuOpen ? 'none' : 'flex' }}>
                <li><Link to='/'>Shop</Link></li>
                <li><Link to='/jackets'>Jackets</Link></li>
                <li><Link to='/coats'>Coats</Link></li>
                {isMobile ? (
                    <>
                        <Link to='/login'><button>Login</button></Link>
                        <div className="cart-icon">
                            <Link to='/cart'><IoCartOutline className="cart-icon-image" /></Link>
                            <div className="nav-cart-count">{cartItemCount}</div>
                        </div>
                    </>
                ) : null}
            </ul>
            <div className="nav-login-cart">
                {!isMobile && (
                    <>
                        <Link to='/login'><button>Login</button></Link>
                        <div className="cart-icon">
                            <Link to='/cart'><IoCartOutline className="cart-icon-image" /></Link>
                            <div className="nav-cart-count">{cartItemCount}</div>
                        </div>
                    </>
                )}
                {isMobile && (
                    <button onClick={toggleMenu} className="menu-toggle">Menu</button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
