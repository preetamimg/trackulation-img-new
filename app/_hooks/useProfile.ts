"use client";

import { useContext } from "react";
import { AuthUserContext } from "../_providers/AuthProvider";

export const useProfile = () => {
  const context = useContext(AuthUserContext);

  if (!context) {
    throw new Error("useProfile must be used within an AuthUserContextProvider");
  }

  const { userData, setUserData, authkey, setAuthKey, handleSignOut } = context;

  return {
    userData,
    setUserData,
    authkey,
    setAuthKey,
    handleSignOut
  };
};
