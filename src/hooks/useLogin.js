import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogin = (email, password) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      dispatch({ type: 'LOGIN', payload: user });

      setIsLoading(false);
      setError(null);
    }
    catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsLoading(false);
    }
  }
  return { login, error, isLoading };
}