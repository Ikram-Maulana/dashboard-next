import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/ui/button";
import { SignOutButton, SignedIn, auth } from "@clerk/nextjs";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

const Menubar = () => {
  const { orgRole } = auth();

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
      <ThemeToggle />
      <Button variant="secondary" asChild>
        <Link href="/">
          Landing Page
          <ArrowUpRightIcon className="w-6 h-6 mr-2" />
        </Link>
      </Button>
      <Button variant="secondary" asChild>
        <Link href="/dashboard">Dashboard</Link>
      </Button>
      {orgRole === "admin" && (
        <Button variant="secondary" asChild>
          <Link href="/dashboard/sensitive">Sensitive</Link>
        </Button>
      )}
      <Button variant="secondary" asChild>
        <Link href="/dashboard/member">Member</Link>
      </Button>
      <SignedIn>
        <Button variant="destructive" asChild>
          <SignOutButton />
        </Button>
      </SignedIn>
    </div>
  );
};

export default Menubar;
