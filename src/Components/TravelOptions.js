import { useAuth0 } from "@auth0/auth0-react";

const TravelOptions = () => {
    const {user,isAuthenticated} = useAuth0();

    return (
       isAuthenticated && <div className="profile">
            <p>{user.given_name}, we have a list of packages available for your next holiday.</p>
            <table id="options" className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Destination</th>
                        <th scope="col">Package</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Europe</th>
                        <td>Family Package</td>
                        <td>Return from Sydney: $12,000 (family of 4)</td>
                    </tr>
                    <tr>
                        <th scope="row">Asia</th>
                        <td>Family Package</td>
                        <td>Return from Sydney: $10,000 (family of 4)</td>
                    </tr>
                    <tr>
                        <th scope="row">North America</th>
                        <td>Family Package</td>
                        <td>Return from Sydney: $17,000 (family of 4)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
 
export default TravelOptions;