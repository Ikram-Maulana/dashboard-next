import Menubar from "@/components/menubar";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Dashboard Next | Home",
  description: "Dashboard Next is a project learning how to use Clerk.dev",
};

const page: FC = () => {
  return (
    <div className="container flex flex-col items-center justify-center h-screen max-w-5xl dark:text-slate-50">
      <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
        Home Page
      </h1>
      <p className="mt-3 leading-7">This is the home page of Dashboard Next</p>

      <Menubar />
    </div>
  );
};

export default page;
