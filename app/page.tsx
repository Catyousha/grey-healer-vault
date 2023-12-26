export default async function Page() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="card shadow-md border-gray-400 p-9 gap-5">
        <h1 className="font-medium text-lg">
          Hello there, welcome to <span className="font-serif text-gray-600 font-bold">Grey Healer Vault</span>
        </h1>
        <button className="btn btn-ghost">Enjoy your stay.</button>
      </div>
    </main>
  );
}
