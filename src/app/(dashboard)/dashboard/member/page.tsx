import Membership from "@/components/dashboard/membership";
import StoreMembership from "@/components/dashboard/membership/store";
import Menubar from "@/components/dashboard/menubar";
import Greetings from "@/components/greetings";
import { OrganizationSwitcher, UserButton, currentUser } from "@clerk/nextjs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Dashboard Next | Dashboard Member",
  description:
    "Dashboard Next is a project learning how to make a dashboard with CRUD using Next.js",
};

const page: FC = async () => {
  const user = await currentUser();

  if (!user) {
    return notFound();
  }

  return (
    <div className="container flex items-center justify-center max-w-5xl dark:text-slate-50">
      <div className="flex flex-col items-center justify-center mt-24">
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
          This is non sensitive dashboard page for everyone
        </p>

        <div className="flex items-center justify-center gap-2">
          <OrganizationSwitcher
            appearance={{
              elements: {
                organizationSwitcherTrigger:
                  "dark:bg-slate-50 p-2 flex justify-center items-center rounded-lg",
              },
            }}
          />
          <StoreMembership />
        </div>

        <Menubar />

        <div className="w-full mt-6">
          <Membership />
        </div>
      </div>
    </div>
  );
};

export default page;
