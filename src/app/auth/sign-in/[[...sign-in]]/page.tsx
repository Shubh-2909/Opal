import React from "react";
import { SignIn } from "@clerk/nextjs";

type pageProps = {};

const SignInPage: React.FC<pageProps> = () => {
  return <SignIn />;
};
export default SignInPage;
