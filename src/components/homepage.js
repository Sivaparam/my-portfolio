import React, { useState } from 'react';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import Resume from './resume';
import Header from './header';
import '../styles/style.css';
import Footer from './footer';

function Homepage() {

    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
};



export default Homepage;