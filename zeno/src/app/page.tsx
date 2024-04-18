import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Image className="m-10 shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)]"
          src="/z.png"
          alt="Zeno Logo"
          width={120}
          height={37}
        />
      </div>
      <div className="">
        <h1 className="animate-pulse m-10 font-mono text-white text-9xl">Modernized News.</h1>
      </div>
    </main>
  );
}
