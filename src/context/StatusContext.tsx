import React, { createContext, useState } from "react";

interface StatusContent {
  currentStatus: string;
  setCurrentStatus: (value: string) => void;
}

interface StatusProviderProps {
  children: React.ReactNode;
}

const DEFAULT = {
  currentStatus: "WAITING",
  setCurrentStatus: () => null,
};

export const StatusContext = createContext<StatusContent>(DEFAULT);

export const StatusProvider = ({ children }: StatusProviderProps) => {
  const [currentStatus, setCurrentStatus] = useState(DEFAULT.currentStatus);
  const values = { currentStatus, setCurrentStatus };

  return (
    <StatusContext.Provider value={values}>{children}</StatusContext.Provider>
  );
};
