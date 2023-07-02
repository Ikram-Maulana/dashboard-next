import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/ui/button";
import { SignedIn, SignedOut, useSession } from "@clerk/nextjs";
import Link from "next/link";
import { FC } from "react";

const Menubar: FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <ThemeToggle />
      <Button variant="secondary" asChild>
        <Link href="/">Home</Link>
      </Button>
      <Button variant="secondary" asChild>
        <Link href="/about-us">About Us</Link>
      </Button>
      <SignedOut>
        <Button variant="secondary" asChild>
          <Link href="/login">Login</Link>
        </Button>
      </SignedOut>
      <SignedIn>
        <Button variant="secondary" asChild>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </SignedIn>
    </div>
  );
};

export default Menubar;
