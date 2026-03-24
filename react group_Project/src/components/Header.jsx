import '../componets_CSS/Header.css'
import { Link } from 'react-router-dom'
import logo from './../assets/logo.svg'

function Header() {
    return (
        <div className='head'>
            <div>
                <h1>
                    <Link to="/">
                        <img src={logo} alt="kiddiz" />
                    </Link>
                </h1>
            </div>
            <ul className='menu'>
                <li><Link to="/">Top</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/episode">Episode</Link></li>
                <li><Link to="/introduction">Introduction</Link></li>
                <li><Link to="/movie">Movie</Link></li>
            </ul>
        </div>
    );
}

export default Header;
