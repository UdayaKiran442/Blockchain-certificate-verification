import React, { createContext, useState } from "react";

export type ContextObject = {
  acc: string;
  setAcc: React.Dispatch<React.SetStateAction<string>>;
};

type ProviderProps = React.PropsWithChildren;

export const AccountContext = createContext<ContextObject>({
  acc: "",
  setAcc: () => {},
});

const Provider = ({ children }: ProviderProps) => {
  const [acc, setAcc] = useState<string>("");
  return (
    <AccountContext.Provider value={{ acc, setAcc }}>
      {children}
    </AccountContext.Provider>
  );
};

export default Provider;
