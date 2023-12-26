import Navbar from './_components/navbar';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className='overflow-y-auto'>
        {children}
      </div>
    </div>
  );
}
