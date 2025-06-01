// import { getDictionary } from '../../lib/get-dictionary'; // If needed for footer text
// import { Locale } from '../../../i18n-config';

// interface FooterProps {
//   lang: Locale;
// }

// export default async function Footer({ lang }: FooterProps) {
// const dictionary = await getDictionary(lang); // If you have translatable footer content

export default function Footer() {
  return (
    <footer style={{ padding: '1rem', backgroundColor: '#f0f0f0', borderTop: '1px solid #ccc', textAlign: 'center', marginTop: '2rem' }}>
      <p>&copy; {new Date().getFullYear()} Yellow Pages. All rights reserved.</p>
      {/* <p>{dictionary.copyrightText}</p> */} {/* Example if using i18n */}
    </footer>
  );
}
