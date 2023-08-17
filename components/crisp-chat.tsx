"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5cfa7398-995e-4f23-a2cb-bc253516b27e");
  }, []);

  return null;
};
