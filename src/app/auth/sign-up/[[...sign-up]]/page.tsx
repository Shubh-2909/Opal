import React from "react";
import { SignIn, SignUp } from "@clerk/nextjs";

type pageProps = {};

const SignUpPage: React.FC<pageProps> = () => {
  return <SignUp />;
};
export default SignUpPage;
