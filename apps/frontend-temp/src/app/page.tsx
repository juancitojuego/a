import Link from 'next/link';
// import { getDictionary } from '../../lib/get-dictionary'; // Assuming i18n setup
// import { Locale } from '../../../i18n-config'; // Assuming i18n setup
import styles from './page.module.css'; // Assuming this file exists or will be minimal

// Example of how dictionary might be used if i18n is set up for server components
// export default async function Home({ params: { lang } }: { params: { lang: Locale }}) {
// const dictionary = await getDictionary(lang);

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to Yellow Pages</h1>
      {/* <p>{dictionary.searchPlaceholder}</p> */}
      <p>Find the best services in town!</p>

      <nav>
        <ul>
          <li>
            <Link href="/listings">View All Listings</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>

      <div>
        <h2>Search Placeholder</h2>
        <input type="text" placeholder="Search for services..." />
        <button>Search</button>
      </div>

      <div>
        <h2>Featured Listings Placeholder</h2>
        {/* Placeholder for featured listings components */}
        <p>Featured listing 1</p>
        <p>Featured listing 2</p>
      </div>
    </main>
  );
}
