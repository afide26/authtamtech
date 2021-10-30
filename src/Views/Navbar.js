import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-title-link"><div className="nav-title">Auth0 TAM Test</div></Link>
            <div className="links">
                <Link to="/" exact>Home</Link>
                <Link to="/challengeone">Challenge One</Link>
                <Link to="/challengetwo">Challenge Two</Link>
                <Link to="/challengethree">Challenge Three</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;