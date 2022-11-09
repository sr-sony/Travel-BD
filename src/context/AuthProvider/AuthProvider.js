import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.init';

export const AuthContext = createContext(); 

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const loginInWithGoogle = (provider) =>{
        setLoading(true)

        return signInWithPopup(auth, provider)
    }

    const loginInWithGithub = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const logOut = () =>{
         setLoading(true)
        return signOut(auth);
    }
    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser);
    }

    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log("state changed", currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user, 
        loginInWithGoogle, 
        logOut, 
        createUser, 
        loginUser,
        verifyEmail, 
        loading, 
        updateUserProfile,
        loginInWithGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;