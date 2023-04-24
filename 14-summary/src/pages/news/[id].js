import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();
  const newsId = router.query.id;
  return (
    <>
      <h1>Detail Page</h1>
      <p>News ID: {newsId}</p>
    </>
  );
}

export default DetailPage;
