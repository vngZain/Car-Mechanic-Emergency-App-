import React, { useEffect, useState, useRef } from "react";
import "./HomePage.css";
import { FaChevronDown, FaCommentDots } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { SiGoogle } from 'react-icons/si';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';



const dishImages = [
  "/images/image1.webp",
  "/images/image2.jpg",
  "/images/image3.webp",
  "C:\Users\User pc\OneDrive\Desktop\mern_food_app (2)\mern_food_app\Frontend\public\images\image 44.jpg",
];



const navLinks = [
    {
        title: "Home",
        items: [
            { name: "Overview", path: "/overview" },
            { name: "Ambience", path: "/ambience" },
        ],

    },
    {
        title: "History",
        items: [
            { name: "Our Story", path: "/history" },
            { name: "Timeline", path: "/Timeline" },

        ],
    },
    {
        title: "Reservations",
        items: [
            { name: "Book a Table", path: "/Bookingtable" },
            { name: "Upgrade Booking", path: "/update-booking" },
            { name: "Cancel Booking", path: "/delete-booking" },
            { name: "Booking details", path: "/read-booking" },
        ],
    },
    {
        title: "Contact us",

        items: [

            { name: "Careers", path: "/career" },
            { name: "Our Location", path: "/Location" },
            { name: "Reach Out", path: "/ContactUs" },

        ],
    },
    {
        title: "Policies",
        items: [

            { name: "privacy policy", path: "/privacy-policy" },
            { name: "Terms & Conditions", path: "/privacy-policy" },

        ],
    },
    {
        title: "Menu",
        items: [
            { name: "food menu", path: "/newmenu" },
            { name: "bar menu", path: "/D1" },
        ],
    },
];





export default function HomePage() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [showChat, setShowChat] = useState(false);
    const navigate = useNavigate();
    const videoRef = useRef(null);



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % dishImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);



    useEffect(() => {
        const cursor = document.querySelector(".custom-cursor");
        const moveCursor = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);



    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log("Autoplay prevented:", error);
            });
        }
    }, []);


    const toggleDropdown = (title) => {
        setOpenDropdown((prev) => (prev === title ? null : title));
    };

    const handleDropdownItemClick = (path) => {
        if (path) {
            navigate(path);
            setOpenDropdown(null);
        }
    };

    const toggleChat = () => {
        setShowChat(!showChat);
    };


    // .............feature.................................
    const features = [
        {
            title: "Personalized Booking",
            description: "Each reservation is tailored to your restaurant's layout and guest preferences, ensuring a smooth booking experience. I work closely with you to bring your vision to life.",
            icon: "💺",
        },
        {
            title: "Modern Technology",
            description: "I use the latest tech to build fast, reliable, and secure table booking systems. From real-time availability to smart notifications, your app stays ahead of the curve.",
            icon: "💡",
        },
        {
            title: "Full Service Support",
            description: "From setting up table plans to ongoing updates and support, you get a partner to ensure your booking system works flawlessly for both staff and customers.",
            icon: "📘",
        },
        {
            title: "Scalable System",
            description: "The system is built to grow with your restaurant. Whether you're adding more tables or expanding to more branches, the solution scales easily.",
            icon: "📦",
        },
    ];





    //..............review...........
    const reviews = [
        {
            name: 'Sabahat Qadeer',
            rating: 5,
            feedback: 'Highly recommended for anyone planning ahead.',
        },
        {
            name: 'Amna Jamil',
            rating: 4,
            feedback: 'The website is clean and user-friendly.',
        },
        {
            name: 'Nimra Gul',
            rating: 5,
            feedback: 'Really impressed by how smooth the reservation process...',
        },
        {
            name: 'Maryam Safdar',
            rating: 5,
            feedback: 'Excellent platform for booking tables online.',
        },
    ];


    // .........review...............
    const [current, setCurrent] = useState(0);

    const nextReview = () => {
        setCurrent((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const { name, rating, feedback } = reviews[current];



    return (
         <div className="homepage-container">
  <div className="video-wrapper">
    <video
      ref={videoRef}
      className="custom-background-video"
      src="/videos/background.mp4"
      muted
      loop
      playsInline
    />
  </div>

            <div className="overlay"></div>
            <div className="custom-cursor"></div>



            {/* .........................nav............................... */}

            <nav className="navbar">
                <div className="logo">
                    <img src="/images/logo.png" alt="Flavors Fusion Logo" />
                    <span>Flavors Fusion</span>
                </div>

                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li
                            key={link.title}
                            className={`nav-item dropdown-parent ${openDropdown === link.title ? "open" : ""}`}
                            onClick={() => toggleDropdown(link.title)}
                        >
                            {link.title}
                            <FaChevronDown className="dropdown-icon" />
                            {openDropdown === link.title && (
                                <ul className="dropdown-menu">
                                    {link.items.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="dropdown-item"
                                            onClick={() =>
                                                handleDropdownItemClick(
                                                    typeof item === "object" ? item.path : null
                                                )
                                            }
                                            style={{
                                                cursor: typeof item === "object" && item.path ? "pointer" : "default",
                                            }}
                                        >
                                            {typeof item === "object" ? item.name : item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                <Link to="/" className="book-button glow">Logout</Link>
            </nav>





            <section className="hero split-hero fancy-layout">
                <div className="hero-text fancy-text">
                    <h1 className="animated-gradient-text pop-in text-center">
                        Explore, Savour, Repeat
                    </h1>
                    <p className="tagline fade-in text-center">Cuisines From Around The Globe</p>
                    <p className="subtag fade-in text-center">Global Bites, Local Delight</p>
                    <div className="button-group zoom-in button-group-spacing">
                        <button
                            className="reserve-button neon-btn small-btn"
                            onClick={() => navigate('/reservation')}
                        >
                            Make Reservations
                        </button>
                        <button
                            className="explore-button neon-btn small-btn"
                            onClick={() => navigate('/menu')}
                        >
                            Explore Our Menu
                        </button>
                    </div>
                </div>

                <div className="carousel-wrapper swipe-carousel">
                    <div
                        className="carousel-slider swipe-transition"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {dishImages.map((src, idx) => (
                            <div className="carousel-card fancy-shadow" key={idx}>
                                <div className="dish-card shape-frame">
                                    <img src={src} alt={`Dish ${idx + 1}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="chat-icon" onClick={toggleChat}>
                <FaCommentDots className="chat-icon-image" />
            </div>

            {showChat && (
                <div className="chat-modal">
                    <div className="chat-header">
                        <h3>Chat with Us</h3>
                        <button onClick={toggleChat}>Close</button>
                    </div>
                    <div className="chat-body">
                        <iframe
                            src="https://www.chatbase.co/chatbot-iframe/A0cXVfTcjn0zIizXzOujv"
                            width="100%"
                            style={{ height: "100%", minHeight: "700px", border: "none" }}
                            frameborder="0"
                        ></iframe>
                    </div>
                </div>
            )}

            {/* ......................................................... */}

            <section className="features-section">
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>




            {/* ......................................... */}
            <div className="review-section">
                <p className="section-label">CLIENT REVIEWS</p>
                <h2 className="review-heading">
                    Don’t just take my word for it,<br />see what my clients have to say
                </h2>

                <div className="review-card">
                    <button className="arrow-btn" onClick={prevReview}>
                        <FaChevronLeft />
                    </button>

                    <div className="review-content">
                        <div className="review-header">
                            <h3>{name}</h3>

                        </div>

                        <div className="stars">
                            {[...Array(rating)].map((_, i) => (
                                <FaStar key={i} color="#f9a825" />
                            ))}
                        </div>

                        <p className="feedback">{feedback}</p>
                    </div>

                    <button className="arrow-btn" onClick={nextReview}>
                        <FaChevronRight />
                    </button>
                </div>


            </div>





            {/* ...................................................... */}
            <footer className="footer">
                <div className="footer-content">
                    <h2>Flavors Fusion</h2>
                    <p>
                        Bringing Culinary Excellence With The Finest Chefs From Around The World.
                    </p>
                    <div className="footer-links">
                        <a href="#">Home</a>
                        <Link to="/ChefTroop">Our Chefs</Link>

                        <a href="/foodmenu">Menu</a>
                        <a href="/ContactUs">Contact</a>
                    </div>
                    <p className="footer-copy">
                        &copy; {new Date().getFullYear()} Flavors Fusion. All Rights Reserved.
                    </p>
                </div>
            </footer>






        </div>

    );
}