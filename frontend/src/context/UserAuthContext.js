import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null); // Initialisiert auf null statt {}

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth state changed:", currentUser); // Konsolenausgabe zur Fehlerbehebung
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserAuthContext.Provider
      value={{ user, logIn, register, logOut, googleSignIn }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}

export function useUserAuth() {
  const context = useContext(UserAuthContext);
  console.log("useUserAuth context:", context); // Konsolenausgabe zur Fehlerbehebung
  if (context === undefined) {
    throw new Error("useUserAuth must be used within a UserAuthContextProvider");
  }
  return context;
}
