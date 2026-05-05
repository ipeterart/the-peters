export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-black min-h-screen">
      <main className="flex flex-col items-center">
        <div className="flex flex-col leading-[0.78] text-[clamp(4rem,10vw,8rem)] font-bold lowercase tracking-[-0.04em]" style={{ fontFamily: '"neue-haas-grotesk-display-pr", sans-serif', fontWeight: 700 }}>
          <span className="text-[#ef4136]">the peters</span>
          <span className="text-white">the peters</span>
          <span className="text-[#ef4136]">the peters</span>
          <span className="text-[#ef4136]">the peters</span>
        </div>
        <nav className="flex w-full justify-between mt-[3px] pr-[0.15em] pl-[0.25em] text-[clamp(1.28rem,3.2vw,2.56rem)] lowercase tracking-[-0.01em]" style={{ fontFamily: '"neue-haas-grotesk-display-pr", sans-serif', fontWeight: 500 }}>
          <a href="/listen" className="text-[#ef4136] hover:text-white">listen</a>
          <a href="https://instagram.com/thepeters.us" target="_blank" rel="noopener noreferrer" className="text-[#ef4136] hover:text-white">contact</a>
          <a href="https://positivelyrecords.la" target="_blank" rel="noopener noreferrer" className="text-[#ef4136] hover:text-white">shop</a>
        </nav>
      </main>
    </div>
  );
}
