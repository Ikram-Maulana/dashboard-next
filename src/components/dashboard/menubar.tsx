import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const Menubar: FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <ThemeToggle />
      <Button variant="secondary" asChild>
        <Link href="/">
          Landing Page
          <ArrowUpRightIcon className="w-6 h-6 mr-2" />
        </Link>
      </Button>
    </div>
  );
};

export default Menubar;
