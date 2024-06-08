"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function page() {
  const router = useRouter();
  useEffect(() => {
    localStorage.removeItem("token");
    router.replace("/login");
  }, [router]);
  return null;
}

export default page;
