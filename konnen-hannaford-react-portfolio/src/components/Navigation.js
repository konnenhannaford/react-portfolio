import {Link} from 'react-router-dom';
export default function Navigation() {

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
            <Link className="navbar-item" to="/">
                Home
            </Link>  
                <Link className="navbar-item" to="/portfolio">
                My portfolio
                </Link>
                <Link className="navbar-item" to="/contact">
                Contact Me & Downloads
                </Link>  
            </div>        
             <div className="navbar-end">
                <div className="navbar-item">
                  <div>
                    <a href="https://www.facebook.com/konnen.hannaford" className="fa fa-facebook"></a>
                    <a href="https://www.twitter.com/konnen93" className="fa fa-twitter"></a>
                    <a href="https://www.instagram.com/konnen23/?hl=en" className="fa fa-instagram"></a>
                    <a href="https://au.linkedin.com/in/konnen-hannaford-b024994a" className="fa fa-linkedin-square"></a>
                    <a href="https://github.com/konnenhannaford" className="fa fa-github"></a>
                    <a href="https://sydney.bootcampcontent.com/Konnenhannaford" className="fa fa-gitlab"></a>
                    <a href="https://www.konnen23@gmail.com" className="fa fa-google"></a>
                    <a href="https://soundcloud.com/konnen-hannaford" className="fa fa-soundcloud"></a>
                  </div>
                </div>
            </div>
        </div>
    </nav>

    )
}
