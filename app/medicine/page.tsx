import { Metadata } from 'next';
import Header from './_sections/header';
import MedicineGrid from './_sections/medicine-grid';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Medicine',
};

export default async function Page() {
  return (
    <main className="flex flex-col pb-10">
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <MedicineGrid/>
      </Suspense>
    </main>
  );
}
