import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Dashboard Next | About",
  description: "Dashboard Next is a project learning how to use Clerk.dev",
};

const page: FC = () => {
  return <h1>About Us Page</h1>;
};

export default page;
