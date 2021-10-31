import {Link} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Components/LoginButton';
import LogoutButton from '../Components/LogoutButton';
const Navbar = () => {
    const {isAuthenticated} = useAuth0();
    
    return(
        <nav className="navbar">
            <Link to="/" className="nav-title-link"><div className="nav-title">Auth0 TAM Test</div></Link>
            {isAuthenticated && 
                (<div className="links">
                <Link to="/" exact>Home</Link>
                <Link to="/challengeone">Challenge One</Link>
                <Link to="/challengetwo">Challenge Two</Link>
                <Link to="/challengethree">Challenge Three</Link>
                <LogoutButton/>
            </div>)}
            <div className="links">
                <LoginButton/>
            </div>
        </nav>
    );
}
 
export default Navbar;