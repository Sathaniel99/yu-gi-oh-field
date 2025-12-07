import {createContext} from "react";

interface VersionContextType {
  estadoVersion: string;
  setEstadoVersion: React.Dispatch<React.SetStateAction<string>>;
}

export const VersionContext = createContext<VersionContextType>({ estadoVersion: "", setEstadoVersion: () => {} });
