"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

interface UserProps {
  children: React.ReactNode;
}

export function CardUser({ children }: UserProps) {
  const router = useRouter();
  function handleRedirect(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    router.refresh();
    router.push("/");
  }
  return (
    <>
      <Suspense fallback="Carregando Dados do usuário">{children}</Suspense>
      <Link href="/" onClick={handleRedirect}>
        Home
      </Link>
    </>
  );
}
