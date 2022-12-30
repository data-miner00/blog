import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <div className="logo">mumk</div>
      </Link>
    </header>
  );
}
