import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin =() =>{
const {signInWithGoogle} = useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation();
const from = location.state || "/";

const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result =>{
       console.log("Google Sign-In Success:", result.user);
       navigate(from)
        
    }).catch(error =>{
        console.error("Google Sign-In Error:", error.message);
        
    })
}
    return (
        <div className='m-4'>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className='btn'>Google Sign In</button>
        </div>
    );
}

export default SocialLogin;