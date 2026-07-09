export default function JsonLd({ data }: { data: unknown[] }) {
  return (
    <>
      {data.map((bloc, i) => (
        // eslint-disable-next-line react/no-danger
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bloc) }}
        />
      ))}
    </>
  );
}
