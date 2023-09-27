import React, { createContext, useState } from "react";
import contractInstance from "../utils/contractInstance";

export type ContextObject = {
  acc: string;
  isOwner: boolean;
  isValidRegistrar: boolean;
  setIsValidRegistrar: React.Dispatch<React.SetStateAction<boolean>>;
  setAcc: React.Dispatch<React.SetStateAction<string>>;
  setIsOwner: React.Dispatch<React.SetStateAction<boolean>>;
  validateOwner: () => Promise<boolean>;
  validateRegistrar: () => Promise<boolean>;
};

type ProviderProps = React.PropsWithChildren;

export const AccountContext = createContext<ContextObject>({
  acc: "",
  isOwner: false,
  isValidRegistrar: false,
  setIsValidRegistrar: () => {},
  setAcc: () => {},
  setIsOwner: () => {},
  validateOwner: async () => false,
  validateRegistrar: async () => false,
});

const Provider = ({ children }: ProviderProps) => {
  const [acc, setAcc] = useState<string>("");
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [isValidRegistrar, setIsValidRegistrar] = useState<boolean>(false);

  const validateOwner = async () => {
    const method = contractInstance.methods._isOwner(acc);
    const isValid: boolean = await method.call();
    console.log("IsOwner:", isValid);
    return isValid;
  };

  const validateRegistrar = async () => {
    const method = contractInstance.methods.isAddressRegistrar(acc);
    const isValid: boolean = await method.call();
    console.log("IsRegistrar:", isValid);
    return isValid;
  };

  return (
    <AccountContext.Provider
      value={{
        acc,
        isOwner,
        isValidRegistrar,
        setAcc,
        setIsOwner,
        setIsValidRegistrar,
        validateOwner,
        validateRegistrar,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default Provider;
