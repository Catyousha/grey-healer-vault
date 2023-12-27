import Navbar from './_components/navbar';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className='overflow-y-auto h-[95vh]'>
        {children}
      </div>
    </div>
  );
}
