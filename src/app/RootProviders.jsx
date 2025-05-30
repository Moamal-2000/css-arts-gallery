"use client";

import GlobalContextProvider from "@/context/GlobalContext";

const RootProviders = ({ children }) => {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
};

export default RootProviders;
