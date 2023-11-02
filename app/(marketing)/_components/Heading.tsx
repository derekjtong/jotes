"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function Heading() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl">
        Your notes, homework, and projects. Unified. Welcome to <span className="underline">Jotes</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl">
        Jotes is the connected workspace <br />
        where students shine
      </h3>
      <Button>
        Enter Jotes
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}

export default Heading;
