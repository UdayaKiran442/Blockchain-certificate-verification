import React, { createContext, useState } from "react";

export type ContextObject = {
  acc: string;
  isOwner: boolean;
  setAcc: React.Dispatch<React.SetStateAction<string>>;
  setIsOwner: React.Dispatch<React.SetStateAction<boolean>>;
};

type ProviderProps = React.PropsWithChildren;

export const AccountContext = createContext<ContextObject>({
  acc: "",
  isOwner: false,
  setAcc: () => {},
  setIsOwner: () => {},
});

const Provider = ({ children }: ProviderProps) => {
  const [acc, setAcc] = useState<string>("");
  const [isOwner, setIsOwner] = useState<boolean>(false);
  return (
    <AccountContext.Provider value={{ acc, isOwner, setAcc, setIsOwner }}>
      {children}
    </AccountContext.Provider>
  );
};

export default Provider;
