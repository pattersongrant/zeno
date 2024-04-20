import Image from "next/image";


export default function Waitlist() {
  return (
    <main className="">
      <div className="flex">
        <a href="/">
        <Image className="m-10 hover:invert duration-500 shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)]"
          src="/Z.png"
          alt="Zeno Logo"
          width={120}
          height={37}
        />
        </a>
        <div className="absolute top-20 right-16">
        <a href="/waitlist" className="font-mono mx-3 inline rounded p-2 border bg-slate-400	hover:shadow-lg ">Download</a>
        <a href="" className="font-mono mx-3 inline rounded p-2 hover:border">Demo</a>
        <a href="" className="font-mono mx-3 inline rounded p-2 hover:border">About</a>
        </div>
      </div>
      <div className="text-center">
        <h4 className="m-5 mx-auto max-w-[50%] font-mono">Zeno is still in development. Please enter the waitlist so you can know when it is ready.</h4>
        <iframe className="mx-auto"src="https://docs.google.com/forms/d/e/1FAIpQLSdT05MIyXZK0JYH3uX6dVRBg_xnWa0hVdYvaqzVAaygFaAqyg/viewform?embedded=true" width="640" height="450">Loading…</iframe>      
      </div>
    </main>
  );
}
