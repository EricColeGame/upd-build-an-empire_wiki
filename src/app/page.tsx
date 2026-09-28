import Link from "next/link";

export default function RootPage() {
  return (
    <main>
      <meta httpEquiv="refresh" content="0;url=/en" />
      <p>
        Redirecting to <Link href="/en">UPD Build An Empire Wiki</Link>…
      </p>
    </main>
  );
}
