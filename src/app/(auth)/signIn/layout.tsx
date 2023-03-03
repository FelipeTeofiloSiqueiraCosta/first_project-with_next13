import React from "react";

interface LayoutSignInProps {
  children: React.ReactNode;
}

export default function LayoutSignInt({ children }: LayoutSignInProps) {
  return (
    <>
      <h1>Layout sign in</h1>
      {children}
    </>
  );
}
