// Add this import at the top
import { gsap } from "gsap";
import { Tween } from "gsap/gsap-core";
import React, { useEffect } from 'react';
import heroModel from '../../assets/hero1.png';
import { default as trendingImage1 } from '../../assets/item1.png';
import { default as trendingImage2 } from '../../assets/item2.png';
import './hero.css';

const scrollingContent = [
    "#Fashion",
    "#Style",
    "#Trendy",
    "#Clothing",
    "#Apparel",
    "#WearableArt",
    "#OOTD",
    "#StreetStyle",
    "#FashionInspiration",
    "#Fashionista"
];

// Updated Hero Component
const Hero = () => {
    useEffect(() => {
        const arrows = document.querySelectorAll(".marquee-arrow");
        let currentScroll = 0;
        let isScrollingDown = true;

        gsap.to(".marquee-arrow", {
            xPercent: -100,
            duration: 5,
            repeat: -1,
            ease: "linear"
        }).totalProgress(0.5);

        gsap.set(".marquee-inner", { xPercent: -50 });

        const handleScroll = () => {
            if (window.pageYOffset > currentScroll) {
                isScrollingDown = true;
            } else {
                isScrollingDown = false;
            }
            gsap.to(Tween, {
                timeScale: isScrollingDown ? 1 : -1,
            });

            arrows.forEach((arrow) => {
                arrow.classList.toggle("active", !isScrollingDown);
            });

            currentScroll = window.pageYOffset;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="hero">
            <div className="hero-content">
                {/* Left container */}
                <div className="hero-content-left">
                    <div className="text-content">
                        <h1>Classics Never Go Out Of Style</h1>
                        <p>Elevate Your Style With Timeless Classics. Embrace The Art Of Elegance.</p>
                        <button className="cta-button">Try It Now</button>
                    </div>
                    <div className="bottom-links">
                        <div className="link">
                            <h4>British Vogue '24 <span>&rarr;</span></h4>
                            <p>Dress to Express, Not to Impress. Fashion That Inspires Confidence.</p>
                        </div>
                        <div className="link">
                            <h4>Fashion Week <span>&rarr;</span></h4>
                            <p>Be the talk of the town with catchy fashion. Fashion that makes you giggle.</p>
                        </div>
                    </div>
                </div>

                {/* Center container */}
                <div className="hero-content-center">
                    <div className="image-content">
                        <img src={heroModel} alt="Fashion Model" className="hero-image" />
                        <div className="box"></div>
                    </div>
                </div>

                {/* Right container */}
                <div className="hero-content-right">
                    <h1> Style Inspirations </h1>
                    <div className="trending-items">
                        <div className="trending-item">
                            <img src={trendingImage1} alt="Trending Fashion 1" />
                            <p>Stylish Jacket</p>
                        </div>
                        <div className="trending-item">
                            <img src={trendingImage2} alt="Trending Fashion 2" />
                            <p>Elegant Dress</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scrolling-container">
                <div className="scrolling-text">
                    {scrollingContent.map((hashtag, index) => (
                        <span key={index}>
                            {hashtag}{index < scrollingContent.length - 1 ? ' ' : ''}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
