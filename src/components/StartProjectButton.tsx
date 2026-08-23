"use client";

import { ReactNode } from "react";
import { PrimaryButton } from "./Button";
import { useEnquiry } from "./EnquiryProvider";

export default function StartProjectButton({
  children = "Start a project",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  const { open } = useEnquiry();
  return (
    <PrimaryButton onClick={open} className={className}>
      {children}
    </PrimaryButton>
  );
}
