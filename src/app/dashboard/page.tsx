import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard page</h1>
      <Link href="/signIn">Signin</Link>
      <Link href="/">Home</Link>
    </>
  );
}
