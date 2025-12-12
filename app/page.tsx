import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 p-10 text-white">
      <Navbar />
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Welcome to Jio Delgado&apos;s Portfolio</h1>
      </div>
    </main>
  );
}
