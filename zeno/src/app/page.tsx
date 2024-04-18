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
      <div className="text-center">
        <h1 className="animate-pulse m-10 font-mono text-white sm:text-7xl md:text-8xl lg:text-9xl">Modernized <br></br>News.</h1>
        <h4 className="m-5 mx-auto max-w-[50%] font-mono">Nobody has time to sift through biased traditional news sources. Zeno scans the internet for you and quickly provides everything you need in an LLM-powered chatbot format, letting you ask questions, ask for sources, and stay up-to-date on things you actually care about.</h4>
      </div>
    </main>
  );
}
