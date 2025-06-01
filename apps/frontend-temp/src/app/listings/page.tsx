// import { ServiceCard } from '../../components/listings/ServiceCard';
// import { fetchGraphQL } from '../../lib/api';
// import { getDictionary } from '../../lib/get-dictionary';
// import { Locale } from '../../../i18n-config';

// Example: Server component fetching data
// async function getServices() {
//   const query = `query ListServices { services { id name shortDescription category } }`;
//   const result = await fetchGraphQL(query);
//   return result.data.services || [];
// }

// export default async function ListingsPage({ params: { lang } }: { params: { lang: Locale }}) {
// const services = await getServices();
// const dictionary = await getDictionary(lang);

export default function ListingsPage() {
  const services = [ // Placeholder data
    { id: '1', name: 'Plumbing Masters', shortDescription: 'Expert plumbing services', category: 'Home Services' },
    { id: '2', name: 'Burger Town', shortDescription: 'Best burgers in the city', category: 'Restaurants' },
    { id: '3', name: 'Tech Fixers', shortDescription: 'Computer and phone repairs', category: 'Electronics' },
  ];

  return (
    <div>
      {/* <h1>{dictionary.navListings}</h1> */}
      <h1>All Listings</h1>
      <p>Browse all available services.</p>
      <div>
        {services.length > 0 ? (
          services.map((service) => (
            <div key={service.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
              {/* <ServiceCard
                id={service.id}
                name={service.name}
                shortDescription={service.shortDescription}
                category={service.category}
              /> */}
              <h2>{service.name}</h2>
              <p>{service.shortDescription}</p>
              <p>Category: {service.category}</p>
              <a href={`/service/${service.id}`}>View Details</a>
            </div>
          ))
        ) : (
          <p>No services listed yet.</p>
        )}
      </div>
    </div>
  );
}
