import Menubar from "@/components/dashboard/menubar";
import Greetings from "@/components/greetings";
import { UserButton } from "@clerk/nextjs";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Dashboard Next | Dashboard",
  description: "Dashboard Next is a project learning how to use Clerk.dev",
};

const page: FC = () => {
  return (
    <div className="container flex flex-col items-center justify-center h-screen max-w-5xl dark:text-slate-50">
      <div className="mb-6">
        <UserButton
          appearance={{
            elements: {
              avatarBox: {
                width: 70,
                height: 70,
              },
            },
          }}
          afterSignOutUrl="/"
        />
      </div>
      <Greetings />
      <p className="mt-3 leading-7">Welcome back to Dashboard Next</p>

      <Menubar />
    </div>
  );
};

export default page;
