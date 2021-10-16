import { useState } from "react";
import initializeFirebase from "../Pages/Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { useEffect } from "react";


initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [errormessage, seterrormessage] = useState({});
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    console.log(user)
    const auth = getAuth();

    const Googlesignin = () => {
        const googleprovider = new GoogleAuthProvider();
        signInWithPopup(auth, googleprovider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                seterrormessage(error.message);
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                seterrormessage('');
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, [])
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const createNewAccount = () => {
        createUserWithEmailAndPassword(auth, email, Password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                seterrormessage(error.message);
            });
    }
    const loginWithEmail = () => {
        signInWithEmailAndPassword(auth, email, Password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                seterrormessage(error.message);
            });
    }
    const Facebooksignin = () => {
        const Facebookprovider = new FacebookAuthProvider();
        signInWithPopup(auth, Facebookprovider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                seterrormessage(error.message);
            })
    }
    const Twittersignin = () => {
        const Twitterprovider = new TwitterAuthProvider();
        signInWithPopup(auth, Twitterprovider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                seterrormessage(error.message);
            });
    }
    return {
        user,
        errormessage,
        Googlesignin,
        logOut,
        email,
        handleEmail,
        Password,
        handlePassword,
        createNewAccount,
        loginWithEmail,
        Facebooksignin,
        Twittersignin
    };
}

export default useFirebase;