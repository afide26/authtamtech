import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Components/Profile";


const Home = () => {
    const {isAuthenticated} = useAuth0()
    return (
        <div className="page-title content">
        <h2>Technical Account Manager(TAM) Candidate Deliverables</h2>
        <h3>This site will contain the answers to the challenges from TAM Candidate - Alan Fidelino</h3>
        <p>Date of submission: 1 November 2021</p>
        {isAuthenticated && <Profile/>}
      </div>
    );
}
 
export default Home;