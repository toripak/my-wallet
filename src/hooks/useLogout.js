import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsLoading(true);

    // log out the user
    try {
      await signOut(auth);

      dispatch({ type: 'LOGOUT' });

      setIsLoading(false);
      setError(null);
    }
    catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsLoading(false);
    }
  }
  return { logout, error, isLoading };
}
