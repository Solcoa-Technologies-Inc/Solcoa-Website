"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

export default function SampleButton() {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button size="lg">Order a Sample</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-none dark">
        <Link href="https://buy.stripe.com/fZe28e2qKaZw63udQQ" target="_blank">
          <DropdownMenuItem>2.5g</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link href="https://buy.stripe.com/aEU6ouc1kgjQbnOeUV" target="_blank">
          <DropdownMenuItem>25g</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link href="https://buy.stripe.com/9AQ7syghA1oWgI84gi" target="_blank">
          <DropdownMenuItem>50g</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
