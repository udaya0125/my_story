import React, { useState, useEffect } from 'react'

const ContactUs = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Instrument+Sans:ital,wght@0,400;1,400&display=swap');

        .font-syne      { font-family: 'Syne', sans-serif; }
        .font-instrument{ font-family: 'Instrument Sans', sans-serif; }

        @keyframes float-slow {
          0%,100% { transform: translateY(0px) scale(1); }
          50%     { transform: translateY(-28px) scale(1.04); }
        }
        @keyframes float-med {
          0%,100% { transform: translateY(0px) scale(1); }
          50%     { transform: translateY(20px) scale(0.96); }
        }
        @keyframes fade-up {
          from { opacity:0; transform:translateY(32px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes spin-slow {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }
        @keyframes pulse-ring {
          0%   { transform:scale(1);   opacity:.6; }
          100% { transform:scale(2.4); opacity:0;  }
        }
        @keyframes shimmer {
          0%   { background-position:-200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes scroll-left {
          from { transform:translateX(0); }
          to   { transform:translateX(-33.333%); }
        }

        .anim-float-slow { animation:float-slow 8s ease-in-out infinite; }
        .anim-float-med  { animation:float-med  6s ease-in-out infinite; }
        .anim-spin-slow  { animation:spin-slow 18s linear infinite; }
        .anim-spin-rev   { animation:spin-slow 22s linear infinite reverse; }
        .anim-ticker     { animation:scroll-left 22s linear infinite; }

        .fade-up-1 { animation:fade-up .8s cubic-bezier(.16,1,.3,1) .10s both; }
        .fade-up-2 { animation:fade-up .8s cubic-bezier(.16,1,.3,1) .22s both; }
        .fade-up-3 { animation:fade-up .8s cubic-bezier(.16,1,.3,1) .34s both; }
        .fade-up-4 { animation:fade-up .8s cubic-bezier(.16,1,.3,1) .46s both; }
        .fade-up-5 { animation:fade-up .8s cubic-bezier(.16,1,.3,1) .58s both; }
        .fade-up-6 { animation:fade-up .8s cubic-bezier(.16,1,.3,1) .70s both; }

        .pulse-ring {
          position:absolute; inset:0; border-radius:50%;
          border:2px solid rgba(52,211,153,.5);
          animation:pulse-ring 2.4s ease-out infinite;
        }
        .pulse-ring-2 { animation-delay:1.2s; }

        .shimmer-text {
          background:linear-gradient(90deg,#fbbf24 0%,#fef08a 40%,#f59e0b 60%,#fbbf24 100%);
          background-size:200% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:shimmer 3s linear infinite;
        }

        .grain-overlay::after {
          content:'';
          position:fixed; inset:0; pointer-events:none; z-index:99;
          opacity:.035;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size:160px;
        }
      `}</style>

      <section className="grain-overlay relative min-h-screen bg-zinc-950 overflow-hidden flex flex-col">

        {/* ── Ambient blobs ── */}
        <div className="pointer-events-none absolute inset-0">
          <div className="anim-float-slow absolute -top-48 -left-48 w-[640px] h-[640px] rounded-full bg-amber-400/[.08] blur-[130px]" />
          <div className="anim-float-med  absolute -bottom-52 -right-36 w-[560px] h-[560px] rounded-full bg-violet-600/[.09] blur-[130px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-300/[.04] blur-[80px]" />
        </div>

        {/* ── Grid ── */}
        <div className="pointer-events-none absolute inset-0 opacity-[.035]"
          style={{
            backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
            backgroundSize:'72px 72px',
          }}
        />

        {/* ── Spinning rings ── */}
        <div className="pointer-events-none absolute top-16 right-14 hidden lg:block">
          <div className="anim-spin-slow w-44 h-44 rounded-full border border-dashed border-amber-400/20" />
        </div>
        <div className="pointer-events-none absolute bottom-20 left-10 hidden lg:block">
          <div className="anim-spin-rev w-28 h-28 rounded-full border border-dashed border-violet-400/15" />
        </div>

        {/* ══ NAVBAR ══ */}
        {/* <header className="fade-up-1 relative z-10 flex items-center justify-between px-6 md:px-14 py-7">
          <span className="font-syne text-white font-bold text-xl tracking-tight">
            acme<span className="text-amber-400">.</span>
          </span>

          <nav className="hidden md:flex items-center gap-8">
            {['Home','Work','About','Contact'].map(item => (
              <a key={item} href="#"
                className="font-instrument text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                {item}
              </a>
            ))}
          </nav>

          <button className="font-instrument text-xs tracking-widest uppercase bg-amber-400 hover:bg-amber-300 text-zinc-900 font-semibold px-5 py-2.5 transition-colors duration-200">
            Get Early Access
          </button>
        </header> */}

        {/* ══ HERO BODY ══ */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6 py-16 md:py-24">

          {/* Live badge */}
          <div className="fade-up-2 inline-flex items-center gap-2.5 border border-zinc-700/80 bg-zinc-900/60 backdrop-blur-sm px-4 py-2 mb-10">
            <span className="relative flex h-2 w-2">
              <span className="pulse-ring" />
              <span className="pulse-ring pulse-ring-2" />
              <span className="relative block h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-instrument text-xs tracking-widest uppercase text-zinc-300">
              Contact portal — coming soon
            </span>
          </div>

          {/* Headline */}
          <h1
            className="fade-up-3 font-syne font-bold text-white leading-[0.88] tracking-tight mb-6"
            style={{ fontSize: 'clamp(52px, 10vw, 124px)' }}
          >
            Let's Build<br />
            <span className="shimmer-text">Something</span><br />
            Together
          </h1>

          {/* Sub-copy */}
          <p className="fade-up-4 font-instrument italic text-zinc-400 text-base md:text-lg max-w-md leading-relaxed mb-12">
            Our contact page is being crafted with care.
            Drop your email — we'll reach out the moment the doors open.
          </p>

          {/* Email CTA */}
          <div className="fade-up-5 w-full max-w-md">
            {!submitted ? (
              <form onSubmit={e => { e.preventDefault(); if(email) setSubmitted(true) }} className="flex">
                <input
                  type="email" required value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-zinc-900 border border-zinc-700 border-r-0 text-white placeholder-zinc-600 px-5 py-4 text-sm font-instrument outline-none focus:border-amber-400/60 transition-colors"
                />
                <button type="submit"
                  className="bg-amber-400 hover:bg-amber-300 text-zinc-900 font-syne font-bold text-xs tracking-widest uppercase px-7 py-4 transition-colors duration-200 whitespace-nowrap">
                  Notify Me
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 border border-emerald-500/30 bg-emerald-500/10 px-6 py-4">
                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-instrument text-sm text-emerald-300 tracking-wide">
                  You're on the list — we'll be in touch.
                </span>
              </div>
            )}
            <p className="mt-3 text-zinc-600 font-instrument text-xs">No spam. Unsubscribe anytime.</p>
          </div>

          {/* Stats */}
          <div className="fade-up-6 mt-16 flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {[
              { val: '2,400+',  label: 'On the waitlist'  },
              { val: 'Q3 2025', label: 'Expected launch'   },
              { val: '100%',    label: 'Free to start'     },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <div className="font-syne text-2xl font-bold text-white mb-1">{val}</div>
                <div className="font-instrument text-xs text-zinc-500 uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ TICKER ══ */}
        <div className="relative z-10 border-t border-zinc-800/60 overflow-hidden">
          <div className="anim-ticker flex whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center shrink-0">
                {['Contact Us','Coming Soon','Stay Tuned','Join the Waitlist','We\'re Almost Ready'].map(t => (
                  <span key={t} className="font-syne text-xs uppercase tracking-widest text-zinc-700 px-8 py-3 border-r border-zinc-800/60">
                    {t} <span className="text-amber-400/40 ml-2">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  )
}

export default ContactUs