import '../styles/globals.css';
import localFont from 'next/font/local';
export const metadata = {
  title: 'Linktr.ee Clone',
  description: 'A great way to share links',
};

const inter = localFont({
  src: '../styles/fonts/Inter.ttf',
  variable: '--inter-font',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
