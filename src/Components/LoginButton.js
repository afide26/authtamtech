import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const {loginWithRedirect} = useAuth0()
    return (
        <a onClick={()=>loginWithRedirect()}>Login</a>
    );
}
 
export default LoginButton;