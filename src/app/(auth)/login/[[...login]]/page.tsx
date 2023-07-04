"use client";

import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/nextjs";
import { ChevronLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const interval = setInterval(() => {
      const footer = document.querySelector(".cl-footer");
      if (footer) {
        footer.remove();
        clearInterval(interval);
      }
    }, 100);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-start gap-4">
        <Button variant="secondary" asChild>
          <Link href="/">
            <ChevronLeftIcon className="w-6 h-6" />
            Kembali ke Beranda
          </Link>
        </Button>
        <SignIn
          appearance={{
            elements: {
              footer: "hidden",
              card: "m-0",
            },
          }}
        />
      </div>
    </div>
  );
}
