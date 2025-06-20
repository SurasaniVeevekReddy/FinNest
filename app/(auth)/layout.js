import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
const AuthLayout = ({children}) => {
  return <div className="flex justify-center pt-30">{children}</div>;
};

export default AuthLayout;