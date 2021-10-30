const ChallengeThree = () => {
    return (
        <div className="page-title content">
          <h2>Challenge #3 - App Modernization</h2>
          <h3>You receive the following email from the Engineering Manager at Travel0.</h3>
          <div className="scenario">
          <blockquote>
          “As we are moving through our modernization project, we’re now looking at Cruise0 which as you know has been live with Auth0 for some time. We have a number of elements we want to look at:
          </blockquote>
          <ul>
              <li>
              We are rebuilding Cruise0 as a modern web application (SPA) in ReactJS.
              </li>
              <li>
              During that rebuild, we want to drive growth in the app by enabling social
              login and ensure we validate Customer emails.
              </li>
              <li>
              Customer Branding - the marketing team wants to introduce a Cruise0  Branded log in experience to the app.
              </li>
          </ul>
          <p>
          We think these things can be achieved with Auth0, but we aren’t sure how Auth0 can support ReactJS, social, and marketing requirements.
          </p>
          <p>
          We are looking for guidance, a solution walkthrough, and a demonstration showing how Auth0 can help solve the above.
          </p>
          </div>
        </div>
    );
}
 
export default ChallengeThree;