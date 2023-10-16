"use client";

import { useSession } from "next-auth/react";

export async function getCurrentUser() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
    },
  });

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  return "User is logged in";
}

interface SignOption {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: "1h",
};
