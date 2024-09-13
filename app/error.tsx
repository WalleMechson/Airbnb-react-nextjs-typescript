"use client";

import { useEffect } from "react";

import EmptyState from "./_components/EmptyState";

interface ErrorStateInterface {
  error: Error;
}

const ErrorState = ({ error }: ErrorStateInterface) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="Uh oh" subtitle="Something went wrong!" />;
};

export default ErrorState;
