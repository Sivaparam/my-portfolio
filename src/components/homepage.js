import React, { useState } from 'react';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import Resume from './resume';
import Welcome from './welcome';
import '../styles/style.css';

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
            <Welcome currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
};



export default Homepage;