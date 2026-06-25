"use client";

import * as React from "react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

function Accordion({ className, ...props }) {
  return <AccordionPrimitive.Root data-slot="accordion" className={cn("flex w-full flex-col", className)} {...props} />;
}

function AccordionItem({ className, ...props }) {
  return <AccordionPrimitive.Item data-slot="accordion-item" className={cn("not-last:border-b mb-5", className)} {...props} />;
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent bg-[#D7E7B6] px-10 py-4 text-left text-md md:text-xl font-medium transition-all outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-8 **:data-[slot=accordion-trigger-icon]:text-muted-foreground",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon data-slot="accordion-trigger-icon" className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
        <ChevronUpIcon data-slot="accordion-trigger-icon" className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content data-slot="accordion-content" className="overflow-hidden text-md data-open:animate-accordion-down data-closed:animate-accordion-up mt-[-10px]" {...props}>
      <div className={cn("h-(--radix-accordion-content-height) bg-white px-10 py-6 pt-5 rounded-br-lg rounded-bl-lg [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
