import Link from 'next/link';

interface ServiceCardProps {
  id: string;
  name: string;
  shortDescription: string;
  category: string;
  // lang: string; // If language is part of the URL for links
}

// export default function ServiceCard({ id, name, shortDescription, category, lang }: ServiceCardProps) {
export default function ServiceCard({ id, name, shortDescription, category }: ServiceCardProps) {
  return (
    <div style={{ border: '1px solid #e0e0e0', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h2>{name}</h2>
      <p><strong>Category:</strong> {category}</p>
      <p>{shortDescription}</p>
      {/* <Link href={`/${lang}/service/${id}`}>View Details</Link> */}
      <Link href={`/service/${id}`}>View Details</Link>
    </div>
  );
}
