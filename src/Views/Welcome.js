import { useAuth0 } from "@auth0/auth0-react";
import TravelOptions from "../Components/TravelOptions";
import image from "../images/cruise0.png"


const Welcome = () => {
    const {isAuthenticated, user} = useAuth0()
    return (
        <div className="page-title content profile">

        {!isAuthenticated && <h2>
          <span><img src={image} alt="Cruise0" /></span> 
        </h2>}
        <h2>
          <span><img src={image} alt="Cruise0" /></span>     
          Welcome {user.name} your next advanture awaits you.    
        </h2>
        <h3>Explore the possibilities of traveling around the world with luxurious and affordable packages from Cruise0.</h3>
        <p>Use the choices below to book your package</p>
        {isAuthenticated && <TravelOptions/>}
      </div>
    );
}
 
export default Welcome;