/**
 *              ---------------------------
 *                   INITIAL INSTALLATION
 *              ---------------------------
 * 1. visit: console.firebase.google.com 
 * 2. crete project (skip google analytics) 
 * 3. register app (crete config)
 * 4. install firebase: npm install firebase 
 * 5. add config file to your project
 * 6. DANGER: Do not publish or make firebase config to public by pushing those to github
 *              -----------------------
 *                   INTIGRATION
 *              -----------------------
 * 7. Visit: Go to Docs > Build > Authentication > Web > Get Started
 * 8. export app from the firebase.config.js file: export default app
 * 9. Login.jsx: import getAuth from firebase/auth 
 * 10. cerate const auth = getAuth(app)
 *               -----------------------
 *                   INTIGRATION
 *              -----------------------
 * 11. import GoogleAuthProvider and create a new Provider
 * 12. use signInWithPopup and pass auth and provider
 * 13. activate sign in method (google, github, facebook....etc)
 * 14. [Vite]: change 127.0.0.1 to localhost
 * 15. 
 * 
 *                -------------------------
 *                   MORE AUTH PROVIDER
 *              --------------------------
 * 
 * 1. activate the auth provider (create app, provide redirect url, client id, client secret )
 * 
 * */ 