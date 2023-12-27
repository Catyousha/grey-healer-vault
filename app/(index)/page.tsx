import { Metadata } from 'next';
import AboutMe from './_sections/about-me';
import Header from './_sections/header';

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Page() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <AboutMe />
    </main>
  );
}
