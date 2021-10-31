import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty'
const Profile = () => {
    const {user,isAuthenticated} = useAuth0();

    return (
       isAuthenticated && <div className="profile">
            <h3>
                <span><img src={user.picture} alt={user.nickname} /></span>
                Welcome {user.name}
            </h3>
            <p>{user.name}'s details from Google OAuth2</p>
            <code>
                <JSONPretty data={user}/>
            </code>
        </div>
    );
}
 
export default Profile;