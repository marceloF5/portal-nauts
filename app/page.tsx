import CurrentDate from './components/CurrentDate'

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center px-24 gap-3">
      <div className="flex">
        <h1 className="text-7xl transition duration-1000 opacity-100 ">
          nauts
        </h1>
        <h1 className="text-7xl transition duration-1000 opacity-50 delay-1000">
          .digital
        </h1>
      </div>
      <p className="text-2xl">design & development</p>

      <CurrentDate />
    </main>
  );
}
