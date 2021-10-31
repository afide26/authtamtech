import { useAuth0 } from "@auth0/auth0-react";
import TravelOptions from "../Components/TravelOptions";



const Welcome = () => {
    const {isAuthenticated} = useAuth0()
    return (
        <div className="page-title content">
        <h2>Welcome to Cruise0</h2>
        <h3>Explore the possibilities of traveling around the world with luxurious and affordable packages from Cruise0.</h3>
        <p>Use the choices below to book your package</p>
        {isAuthenticated && <TravelOptions/>}
      </div>
    );
}
 
export default Welcome;