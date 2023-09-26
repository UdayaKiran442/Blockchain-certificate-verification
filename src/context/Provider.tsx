import React, { createContext, useState } from "react";
import contractInstance from "../utils/contractInstance";

export type ContextObject = {
  acc: string;
  isOwner: boolean;
  setAcc: React.Dispatch<React.SetStateAction<string>>;
  setIsOwner: React.Dispatch<React.SetStateAction<boolean>>;
  validateOwner: () => Promise<boolean>;
};

type ProviderProps = React.PropsWithChildren;

export const AccountContext = createContext<ContextObject>({
  acc: "",
  isOwner: false,
  setAcc: () => {},
  setIsOwner: () => {},
  validateOwner: async () => false,
});

const Provider = ({ children }: ProviderProps) => {
  const [acc, setAcc] = useState<string>("");
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const validateOwner = async () => {
    console.log("Account:", acc);
    const method = contractInstance.methods._isOwner(acc);
    const isValid: boolean = await method.call();
    console.log("IsOwner:", isValid);
    return isValid;
  };

  return (
    <AccountContext.Provider
      value={{ acc, isOwner, setAcc, setIsOwner, validateOwner }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default Provider;
