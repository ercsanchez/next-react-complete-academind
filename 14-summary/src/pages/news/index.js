import Link from 'next/link';

function News() {
  return (
    <>
      <h1>News Page</h1>
      {/* news posts */}
      <ul>
        <li>
          <Link href="/news/news-post-1">News Post 1</Link>
        </li>
        <li>
          <Link href="/news/something-else">Something else</Link>
        </li>
      </ul>
    </>
  );
}

export default News;
