"use client";

import { useUser } from "@clerk/nextjs";

export default function Greetings() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
      Hi, {user.fullName?.replace(/\b\w/g, (l) => l.toUpperCase())}
    </h1>
  );
}
