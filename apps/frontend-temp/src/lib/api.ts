// apps/frontend-temp/src/lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL || '/graphql'; // Placeholder

export interface Service {
  id: string;
  name: string;
  description?: string;
  shortDescription?: string;
  category?: string;
  contacts?: {
    phone?: string;
    email?: string;
    website?: string;
  };
  // Add other fields as necessary
}

export interface User {
  id: string;
  name?: string;
  email?: string;
  bio?: string;
  memberSince?: string;
  // Add other fields
}


export async function fetchGraphQL(query: string, variables?: Record<string, any>): Promise<{ data: any }> {
  // This is a stub. In a real app, you'd use fetch or an Apollo Client.
  // console.log('Fetching GraphQL:', { query, variables });

  // Simulate API call based on query inspection (very basic)
  if (query.includes('getService')) {
    return {
      data: {
        service: {
          id: variables?.id,
          name: `Service ${variables?.id}`,
          description: 'A great service with many features and benefits, available 24/7.',
          contacts: { phone: '123-456-7890', email: `service${variables?.id}@example.com`, website: `www.service${variables?.id}.com`},
          category: 'Simulated Category',
          location: '123 Simulated St, Anytown'
        } as Service
      }
    };
  }
  if (query.includes('listServices')) {
    return {
      data: {
        services: [
          {id: '1', name: 'Service 1', shortDescription: 'Desc 1', category: 'Cat A'},
          {id: '2', name: 'Service 2', shortDescription: 'Desc 2', category: 'Cat B'}
        ] as Service[]
      }
    };
  }
  if (query.includes('getUser')) {
    return {
      data: {
        user: {
          id: variables?.id,
          name: `User ${variables?.id}`,
          email: `user${variables?.id}@example.com`,
          bio: 'A sample bio for the user.',
          memberSince: new Date(Date.now() - 365*24*60*60*1000).toLocaleDateString() // approx 1 year ago
        } as User
      }
    }
  }
  return { data: {} };
}
