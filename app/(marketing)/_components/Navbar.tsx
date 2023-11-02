"use client";

import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { ModeToggle } from "../../../components/ModeToggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div className={cn("fixed top-0 z-50 flex w-full items-center bg-background p-6 dark:bg-[#1F1F1F]", scrolled && "border-b shadow-sm")}>
      <Logo />
      <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        {isLoading && <p>Loading...</p>}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm">Get Jotes Free</Button>
            </SignUpButton>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
