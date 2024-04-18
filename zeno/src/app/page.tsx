import Image from "next/image";

export default function Home() {
  return (
    <main className="place-content-center">
      <div className="">
        <Image className="m-10 shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)]"
          src="/z.png"
          alt="Zeno Logo"
          width={120}
          height={37}
        />
      </div>
      <div className="">
        <h1 className="animate-typing font-mono text-9xl text-brown">Modernized News.</h1>
      </div>
    </main>
  );
}
