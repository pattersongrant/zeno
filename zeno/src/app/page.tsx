import Image from "next/image";


export default function Home() {
  return (
    <main className="">
      <div className="flex">
        <a href="/">
        <Image className="m-0 sm:m-10 hover:invert duration-500 shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)]"
          src="/Z.png"
          alt="Zeno Logo"
          width={120}
          height={37}
        />
        </a>
        <h1 className="opacity-0 lg:opacity-100 font-mono my-20">Zeno: We&apos;re &quot;breaking news!&quot; Literally!<br></br> You: clever. -_-</h1>
        <div className="absolute top-20 right-16">
        <a href="/waitlist" className="font-mono mx-3 inline rounded p-2 border bg-slate-400	hover:shadow-lg ">Download</a>
        <a href="/waitlist" className="font-mono mx-3 inline rounded p-2 hover:border">Demo</a>
        <a href="/waitlist" className="font-mono mx-3 inline rounded p-2 hover:border">About</a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="animate-pulse m-0 sm:m-10 font-mono text-white text-7xl md:text-8xl lg:text-9xl">Modernized <br></br>News.</h1>
        <h4 className="m-5 mx-auto max-w-[50%] font-mono">Nobody has time to sift through biased traditional news sources. Zeno scans the internet for you and quickly provides everything you need in an LLM-powered chatbot format, letting you ask questions, ask for sources, and stay up-to-date on things you actually care about.</h4>
      </div>
    </main>
  );
}
