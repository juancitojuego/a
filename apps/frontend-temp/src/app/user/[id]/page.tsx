// import { fetchGraphQL } from '../../../lib/api';
// import { getDictionary } from '../../../lib/get-dictionary';
// import { Locale } from '../../../../i18n-config';

interface UserPageProps {
  params: {
    id: string;
    // lang: Locale;
  };
}

// async function getUser(id: string) {
//   // Placeholder for fetching user data
//   return { id, name: `User ${id}`, bio: 'A brief bio...' };
// }

// export default async function UserDetailPage({ params }: UserPageProps) {
// const user = await getUser(params.id);
// const dictionary = await getDictionary(params.lang);

export default function UserDetailPage({ params }: UserPageProps) {
  // Placeholder data
  const user = {
    id: params.id,
    name: `User ${params.id}`,
    email: `user${params.id}@example.com`,
    bio: 'This is a sample user bio. They are passionate about many things and contribute to the community.',
    memberSince: new Date().toLocaleDateString(), // Placeholder
  };

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div>
      {/* <h1>{dictionary.userDetailsTitle}: {user.name}</h1> */}
      <h1>User Profile: {user.name}</h1>
      <p><strong>User ID:</strong> {user.id}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
      <p><strong>Member Since:</strong> {user.memberSince}</p>
      {/* Display user's listed services, reviews, etc. */}
    </div>
  );
}
