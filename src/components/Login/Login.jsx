import React, { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSignOut = () => {
    signOut(auth).then((result) => {
        // Sign-out successful.
        console.log(result)
        setUser(null)
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
    
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser)
        setUser(loggedInUser);
        
    })
  }

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  return (
    <div>
      {
        user ? <button onClick={handleSignOut}>SignOut</button> : <>
        <button onClick={handleGoogleSignIn}>Google Login</button>
        <button onClick={handleGithubSignIn}>Github Login</button>
        </>
      }
      {
        user && <div>
        <h2>{user?.displayName}</h2>
        <h3>Email: {user?.email}</h3>
        <img src={user?.photoURL} alt="" />
      </div>
      }
    </div>
  );
};

export default Login;
