import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  // sign up function
  const signup = async (email, password, displayName) => {
    setError(null);
    setIsLoading(true);

    try {
      // try to proceed with the signup
      const response = await createUserWithEmailAndPassword(auth, email, password);

      if (!response) {
        throw new Error('Signup could not be completed...')
      }

      // update the display name on newly created user
      await updateProfile(auth.currentUser, { displayName });

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: response.user });

      setIsLoading(false);
      setError(null);

    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsLoading(false)
    }

  }

  return { error, isLoading, signup };

}