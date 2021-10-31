import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty'
const Profile = () => {
    const {user} = useAuth0();

    return (
        <div className="profile">
            <h3 className="profile">
                <span><img src={user.picture} alt={user.nickname} /></span>
                Welcome {user.name}
            </h3>
            <code>
                <JSONPretty data={user}/>
            </code>
        </div>
    );
}
 
export default Profile;