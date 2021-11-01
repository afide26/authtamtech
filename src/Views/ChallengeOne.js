import { useAuth0 } from "@auth0/auth0-react";


const ChallengeOne = () => {

  const {isAuthenticated} = useAuth0();
    if(!isAuthenticated) return <div className="page-title content"><h2>Please login to view this page</h2></div>
    return (
        <div className="page-title content">
          <h2>Challenge #1 - Duplicate Accounts - License Concerns</h2>
          <h3>You receive the following email from the Product Manager at Travel0.</h3>
          <div className="scenario">
          <blockquote>
          “As you know, we went live with our first implementation using the Auth0 default database with username/password about three months ago. In order to increase the adoption of our app, we introduced social connections (Google) a few weeks ago. The good news is our app usage has almost tripled as a result, which is higher than we anticipated! However, more than half of that usage comes from duplicate profiles, and now we are over our licensed quota. How can we address this problem?”
          </blockquote>
          </div>
        </div>
    );
}
 
export default ChallengeOne;