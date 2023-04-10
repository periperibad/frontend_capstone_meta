import Header from './Header';
import Main from './Hero';
import Footer from './Footer';
import {Routes, Route, Link} from 'react-router-dom';

function Nav() {
    return (
        <div className="App">
            <nav className="nav">
                <Link to="/" className="nav-item">Header</Link>
                <Link to="/main" className='nav-item'>Main</Link>
                <Link to="/footer" className='nav-item'>Footer</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/main" element={<Main />} />
                <Route path="/footer" element={<Footer />} />
            </Routes>
        </div>
    )
}

export default Nav;