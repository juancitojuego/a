import Link from 'next/link';
// import { getDictionary } from '../../lib/get-dictionary';
// import { Locale } from '../../../i18n-config';
// import LanguageSwitcher from './LanguageSwitcher'; // Placeholder

// interface HeaderProps {
//   lang: Locale;
// }

// export default async function Header({ lang }: HeaderProps) {
// const dictionary = await getDictionary(lang);

export default function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        {/* <Link href={`/${lang}`}><h1>{dictionary.siteTitle}</h1></Link> */}
        <Link href="/"><h1>Yellow Pages</h1></Link>
      </div>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
          <li>
            {/* <Link href={`/${lang}`}>{dictionary.navHome}</Link> */}
            <Link href="/">Home</Link>
          </li>
          <li>
            {/* <Link href={`/${lang}/listings`}>{dictionary.navListings}</Link> */}
            <Link href="/listings">Listings</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <div>
        {/* <LanguageSwitcher /> */}
        <p>Language Switcher Placeholder</p>
      </div>
    </header>
  );
}
