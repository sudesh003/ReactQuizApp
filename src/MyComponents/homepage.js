import React from 'react';
import { Link } from 'react-router-dom';
import './homepageStyle.css'
import { FaHeart } from 'react-icons/fa';

function Homepage() {
    return (
        <div className="App-home">
            <h1>MathMinded</h1>
            <div className='start'>
                <Link to="/questionpage">
                    <button>START</button>
                </Link>
            </div>
            <div className='select'>
                {/* <Link to="/selectpage">
                    <button>SELECT</button>
                </Link> */}
            </div>
            <div className='love'><FaHeart /></div>
        </div>
    );
}

export default Homepage;
