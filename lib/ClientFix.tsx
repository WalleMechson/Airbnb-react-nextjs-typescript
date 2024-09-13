"use client";

import { useEffect, useState } from "react";

const ClientFix = ({ children }: { children: React.ReactNode }) => {
  let [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <>{children}</>;
};

export default ClientFix;
