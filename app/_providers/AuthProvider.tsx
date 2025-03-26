"use client";

import React, { useState, createContext, useEffect, ReactNode } from "react";
import { AUTH_TOKEN } from "../_constants";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { ROUTE_CONST } from "../_constants/routeConstants";
import { Session } from "next-auth";

interface AuthContextProps {
  userData: userDetailProps | null;
  setUserData: React.Dispatch<React.SetStateAction<userDetailProps | null>>;
  authkey: string | null;
  setAuthKey: React.Dispatch<React.SetStateAction<string | null>>;
  handleSignOut : () => void
}

type AuthContextProviderProps = {
  children : ReactNode
}

// export interface userDetailProps {
//   accessToken? : string
//   expires? : string
//   user? : {
//     email? : string
//     name? : string
//     role? : string
//   }
// }

export interface userDetailProps extends Session {
  // user?: {
  //   email?: string;
  //   name?: string;
  //   role?: string;
  // };
  user?: Session["user"] & {
    role?: string; // Extend the user type with role
  };
}

export const AuthUserContext = createContext<AuthContextProps | undefined>(undefined);

const AuthUserContextProvider : React.FC<AuthContextProviderProps> = ({ children }) => {

  const [userData, setUserData] = useState<userDetailProps | null>(null);
  const [authkey, setAuthKey] = useState<string | null>(null);
  // const pathname = usePathname();
    const router = useRouter()
    const {data : session} = useSession();

  useEffect(() => {
    const auth_key = localStorage.getItem(AUTH_TOKEN);
    setAuthKey(auth_key);
    setUserData(session ? {
      ...session, // Spread all session properties
      user: {
        ...session?.user,
        // @ts-expect-error
        role: session.user?.role ?? undefined, // Add role if necessary
      }
    } : null);
    
    
  }, [session]);


  const handleSignOut =  async () => {
    localStorage.removeItem(AUTH_TOKEN);
    document.cookie = `${AUTH_TOKEN}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
    const res = await signOut({ callbackUrl: '/login', redirect: false });
    if(res?.url) {
      router.push(ROUTE_CONST.LOGIN);
    }
  };


  // useEffect(() => {
  //   const token = localStorage.getItem(localStorageKeys.auth_token);
  //   if (token) {
  //     getUserDetail(token);
  //   }
  // }, [authkey, pathname]);

  // const getUserDetail = async (authkey) => {
  //   try {
  //     const res = await Apiservice.getAuth(
  //       ApiEndPoints.auth.userDetail,
  //       authkey
  //     );
  //     if (res.data.status === 401) {
  //       localStorage.removeItem(localStorageKeys.auth_token);
  //       document.cookie = `${cookieKeys.auth_key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
  //       setAuthKey(null);
  //       setUserData(null);
  //       router.push(ROUTE_CONST.LOGIN);
  //     }
  //     if (res.data.success) {
  //       const data = {...res?.data?.data, accessibleRoute: res?.data?.accessibleRoute, notifications: res?.data?.notifications}
  //       setUserData(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <AuthUserContext.Provider
      value={{ userData, setUserData, authkey, setAuthKey, handleSignOut }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserContextProvider;
