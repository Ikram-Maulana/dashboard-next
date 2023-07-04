import Menubar from "@/components/dashboard/menubar";
import Greetings from "@/components/greetings";
import { OrganizationSwitcher, UserButton, currentUser } from "@clerk/nextjs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Dashboard Next | Dashboard",
  description: "Dashboard Next is a project learning how to use Clerk.dev",
};

const page: FC = async () => {
  const user = await currentUser();

  if (!user) {
    return notFound();
  }

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
      <p className="my-3 leading-7 text-center">
        Welcome back to Dashboard Next
      </p>
      <OrganizationSwitcher
        appearance={{
          elements: {
            organizationSwitcherTrigger:
              "dark:bg-slate-50 p-4 flex justify-center items-center rounded-lg",
          },
        }}
      />

      <Menubar />
    </div>
  );
};

export default page;
