import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The NEWS Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJs</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
