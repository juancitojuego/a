// import { fetchGraphQL } from '../../../lib/api';
// import { getDictionary } from '../../../lib/get-dictionary';
// import { Locale } from '../../../../i18n-config';

interface ServicePageProps {
  params: {
    id: string;
    // lang: Locale; // Assuming lang is part of the route if using path-based i18n
  };
}

// Example: Server component fetching data by ID
// async function getService(id: string) {
//   const query = `query GetService($id: ID!) { service(id: $id) { id name description contacts { phone email } } }`;
//   const variables = { id };
//   const result = await fetchGraphQL(query, variables);
//   return result.data.service;
// }

// export default async function ServiceDetailPage({ params }: ServicePageProps) {
// const service = await getService(params.id);
// const dictionary = await getDictionary(params.lang);

export default function ServiceDetailPage({ params }: ServicePageProps) {
  // Placeholder data
  const service = {
    id: params.id,
    name: `Service ${params.id}`,
    description: 'This is a detailed description of the service. It highlights all the features and benefits offered to the customer.',
    contacts: {
      phone: '123-456-7890',
      email: `info@service${params.id}.com`,
      website: `www.service${params.id}.com`,
    },
    category: 'Sample Category',
    location: '123 Main St, Anytown',
  };

  if (!service) {
    return <div>Service not found.</div>;
  }

  return (
    <div>
      {/* <h1>{dictionary.serviceDetailsTitle}: {service.name}</h1> */}
      <h1>Service Details: {service.name}</h1>
      <p><strong>ID:</strong> {service.id}</p>
      <p><strong>Category:</strong> {service.category}</p>
      <p><strong>Description:</strong> {service.description}</p>
      <p><strong>Location:</strong> {service.location}</p>
      <h2>Contact Information</h2>
      <p><strong>Phone:</strong> {service.contacts.phone}</p>
      <p><strong>Email:</strong> <a href={`mailto:${service.contacts.email}`}>{service.contacts.email}</a></p>
      <p><strong>Website:</strong> <a href={`http://${service.contacts.website}`} target="_blank" rel="noopener noreferrer">{service.contacts.website}</a></p>
      {/* Add more details like reviews, gallery, etc. */}
    </div>
  );
}

// Optional: Generate static params if you know all service IDs at build time
// export async function generateStaticParams() {
//   // const services = await fetchAllServiceIds(); // Fetch all service IDs
//   // return services.map((service: { id: string }) => ({ id: service.id }));
//   return [{ id: '1' }, { id: '2' }]; // Placeholder
// }
