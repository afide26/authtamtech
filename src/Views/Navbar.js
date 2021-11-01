import {Link} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Components/LoginButton';
import LogoutButton from '../Components/LogoutButton';
const Navbar = () => {
    const {isAuthenticated} = useAuth0();

    if(!isAuthenticated) return (
            <nav className="navbar">
                <Link to="/" className="nav-title-link">
                <div className="nav-title">Cruise0</div>
                </Link>
                <div className="links">
                <LoginButton/>
                </div>
            </nav>
    )
    
    return(
        <nav className="navbar">
            <Link to="/" className="nav-title-link"><div className="nav-title">Auth0 TAM Test</div></Link>
 
            <div className="links">
                <Link to="/" exact>Welcome</Link>
                <Link to="/Home">Home</Link>
                <Link to="/challengeone">Ch1</Link>
                <Link to="/challengetwo">Ch2</Link>
                <Link to="/challengethree">Ch3</Link>
                {isAuthenticated && <LogoutButton/>}
            </div>
        </nav>
    );
}
 
export default Navbar;