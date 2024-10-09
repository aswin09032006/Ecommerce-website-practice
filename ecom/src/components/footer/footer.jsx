import React from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
        <div className="footer-content-container">
            <div className="footer-content-header">
            <a href="/" className="footer-content-header-link">
                Veloura
            </a>
            </div>
            <div className="footer-content-company">
            <a href="/">Home</a>
            <a href="#">About</a>
            </div>
            <div className="footer-content-services">
            <a href="/jackets">Jackets</a>
            <a href="/coats">Coats</a>
            </div>
            <div className="footer-content-quick-links">
            <a href="/contact-us">Contact</a>
            <a href="/faq">FAQ</a>
            </div>
            <div className="footer-content-findus">
            <div className="footer-content-icons-container">
                <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaFacebook />
                </a>
                <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaInstagram />
                </a>
                <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                >
                <CiMail />
                </a>
                <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaLinkedin />
                </a>
            </div>
            </div>
        </div>
        <footer>
            &copy; {new Date().getFullYear()}{" "}
            <a href="/" style={{ color: "white", textDecoration: "none" }}>
            Veloura
            </a>
            . All rights reserved.
        </footer>
        </div>
    );
};

export default Footer;
