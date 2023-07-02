import { Button } from "@/components/ui/button";
import { SignUp } from "@clerk/nextjs";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-start gap-4">
        <Button variant="secondary" asChild>
          <Link href="/">
            <ChevronLeftIcon className="w-6 h-6" />
            Kembali ke Beranda
          </Link>
        </Button>
        <SignUp />
      </div>
    </div>
  );
}
