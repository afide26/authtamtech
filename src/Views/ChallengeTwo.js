import { useAuth0 } from "@auth0/auth0-react";


const ChallengeTwo = () => {
  const {isAuthenticated} = useAuth0();
  if(!isAuthenticated) return <div className="page-title content"><h2>Please login to view this page</h2></div>
    return (
        <div className="page-title content">
          <h2>Challenge #2 - Renewal</h2>
          <h3>3 months before renewal, their CTO (the business sponsor) emails:</h3>
          <div className="scenario">
          <blockquote>
          “We are almost at the end of our first year contract with Auth0, and I have to say I’m not seeing the value in Auth0 that our original business case planned. I’ve held a number of conversations with one of your competitors who can meet all our requirements at a much lower cost.”
          </blockquote>
          </div>
        </div>
    );
}
 
export default ChallengeTwo;