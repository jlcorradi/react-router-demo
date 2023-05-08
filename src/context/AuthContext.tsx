import React, { useContext, useState } from "react";

const useAuth = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [roles, setRoles] = useState<Array<string>>([]);
  return {
    state: {
      isLoggedin,
      roles,
    },
    actions: {
      setIsLoggedin,
      setRoles,
    },
  };
};

type IAuthContext = ReturnType<typeof useAuth>;

const AuthContext = React.createContext<IAuthContext>(
  {} as unknown as IAuthContext
);

function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };
