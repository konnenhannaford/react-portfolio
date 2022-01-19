import {Link} from 'react-router-dom';
export default function Navigation() {

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
            <Link className="navbar-item" to="/">
                About Me
            </Link>  
                <Link className="navbar-item" to="/portfolio">
                My portfolio
                </Link>
                <Link className="navbar-item" to="/contact">
                Contact Me & Resume
                </Link>  
            </div>        
        </div>
    </nav>

    )
}
