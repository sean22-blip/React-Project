import '../componets_CSS/Header.css'
import { Link } from 'react-router-dom'
import logo from './../assets/logo.svg'
import { useState } from 'react'

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <div className='head'>
            <div>
                <h1>
                    <Link to="/">
                        <img src={logo} alt="kiddiz" />
                    </Link>
                </h1>
            </div>

            <ul className={`menu ${open ? 'active' : ''}`}>
                <li><Link to="/">Top</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/episode">Episode</Link></li>
                <li><Link to="/introduction">Introduction</Link></li>
                <li><Link to="/movie">Movie</Link></li>
            </ul>

            <div className="burger" onClick={() => setOpen(!open)}>
                ☰
            </div>
        </div>
    );
}

export default Header;