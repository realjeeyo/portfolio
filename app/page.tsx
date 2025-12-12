import navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      {navbar()}
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Welcome to Jio Delgado&apos;s Portfolio</h1>
      </div>
    </main>
  );
}
