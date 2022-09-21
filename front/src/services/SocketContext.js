import { createContext } from "react";
export const SocketContext = createContext({
  userData: {
    username: "",
    receivername: "",
    connected: false,
    message: "",
  },
  setUserData: () => {},
  privateChats: "",
  setPrivateChats: () => {},
  publicChats: "",
  setPublicChats: () => {},
  tab: "",
  setTab: () => {},
});
