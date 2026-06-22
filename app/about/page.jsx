import React from 'react'

const About = () => {
  return (
        <section className="bg-[#0D0D0D] min-h-screen flex flex-col my-10">

          {/* Main split grid */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">

            {/* ── LEFT PANEL ── */}
            <div className="flex flex-col justify-between px-10 pt-12 pb-10 lg:px-14 lg:pt-16 lg:pb-14 border-r border-[#1e1e1e]">

              {/* Top: badge + headline */}
              <div>
                {/* About Us badge */}
                <div className="inline-flex items-center gap-2 border border-[#333] rounded-full px-4 py-1.5 mb-10">
                  <span className="w-2 h-2 rounded-full bg-[#F9C014] inline-block" />
                  <span className="text-[11px] font-semibold text-[#888] tracking-[0.12em] uppercase">
                    About us
                  </span>
                </div>

                {/* Hero headline */}
                <h1
                  className="text-[52px] md:text-[64px] lg:text-[72px] font-black leading-[0.93] tracking-[-0.03em]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <span className="text-white block">The kitchen</span>
                  <span className="text-white block">that never</span>
                  <span className="text-[#F9C014] block">cuts corners.</span>
                </h1>
              </div>

              {/* Bottom: three stats + scroll indicator */}
              <div>
                {/* Stats row */}
                <div className="flex items-center gap-0 mt-12">
                  <div className="pr-8">
                    <p
                      className="text-[28px] font-black text-white leading-none tracking-[-0.02em]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      2018
                    </p>
                    <p className="text-[10px] font-semibold text-[#444] tracking-[0.12em] uppercase mt-1">
                      Founded
                    </p>
                  </div>

                  <div className="w-px h-9 bg-[#2a2a2a] mx-0" />

                  <div className="px-8">
                    <p
                      className="text-[28px] font-black text-white leading-none tracking-[-0.02em]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Meerut
                    </p>
                    <p className="text-[10px] font-semibold text-[#444] tracking-[0.12em] uppercase mt-1">
                      Home city
                    </p>
                  </div>

                  <div className="w-px h-9 bg-[#2a2a2a]" />

                  <div className="pl-8">
                    <p
                      className="text-[28px] font-black text-white leading-none tracking-[-0.02em]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      120+
                    </p>
                    <p className="text-[10px] font-semibold text-[#444] tracking-[0.12em] uppercase mt-1">
                      Dishes
                    </p>
                  </div>
                </div>

                {/* Scroll indicator */}
                <div className="mt-8">
                  <div className="w-9 h-9 rounded-full border border-[#2a2a2a] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-[#555]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT PANEL ── */}
            <div className="flex flex-col bg-[#161616]">

              {/* Top half: big stat */}
              <div className="flex-1 flex flex-col justify-end px-10 pt-14 pb-8 lg:px-12 border-b border-[#1e1e1e]">
                <p
                  className="text-[80px] md:text-[96px] font-black text-[#F9C014] leading-none tracking-[-0.04em]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  50K+
                </p>
                <p className="text-[13px] text-[#555] tracking-[0.04em] mt-2 mb-6">
                  Orders delivered &amp; counting
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-[#F9C014] text-[#0D0D0D] text-[12px] font-bold px-3.5 py-1.5 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    4.9 ★ Rating
                  </span>
                  <span className="inline-flex items-center bg-[#222] text-[#888] text-[12px] font-semibold px-3.5 py-1.5 rounded-full border border-[#2a2a2a]">
                    Award-winning
                  </span>
                  <span className="inline-flex items-center bg-[#222] text-[#888] text-[12px] font-semibold px-3.5 py-1.5 rounded-full border border-[#2a2a2a]">
                    Farm fresh
                  </span>
                </div>
              </div>

              {/* Bottom half: caption + delivery badges */}
              <div className="flex-1 flex flex-col justify-between px-10 py-8 lg:px-12">
                <p className="text-[14px] text-[#666] leading-[1.8] max-w-[300px]">
                  We started in a{" "}
                  <span className="text-[#aaa]">200 sq ft kitchen with one burner</span>{" "}
                  and a grandmother&apos;s recipe book. Six years later, we&apos;re still cooking the
                  same way — with patience, care, and zero shortcuts.
                </p>

                {/* Delivery pill badges */}
                <div className="flex flex-col gap-2.5 mt-8">
                  <div className="inline-flex items-center gap-2.5 border border-[#2a2a2a] rounded-full px-4 py-2 w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-[#555]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3" />
                      <rect x="9" y="11" width="14" height="10" rx="2" />
                      <circle cx="12" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                    </svg>
                    <span className="text-[13px] text-[#666]">30-min delivery</span>
                  </div>

                  <div className="inline-flex items-center gap-2.5 border border-[#2a2a2a] rounded-full px-4 py-2 w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-[#555]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="text-[13px] text-[#666]">Open 7 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default About