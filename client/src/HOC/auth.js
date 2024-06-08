"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const auth = (WrapedComponent) => {
  return (props) => {
    const router = useRouter();
    useEffect(() => {
      let token = localStorage.getItem("token");
      if (!token) {
        router.replace("/login");
      }
    }, [router]);

    return <WrapedComponent {...props} />;
  };
};

export default auth;
