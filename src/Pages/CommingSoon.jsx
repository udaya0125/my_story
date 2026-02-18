import React, { useState } from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <>
      <Navigation />
      <div className="relative w-full min-h-screen bg-[#FFFDF6] overflow-hidden font-serif flex flex-col">
        <div
        className="relative bg-cover bg-center bg-no-repeat w-full h-[50vh] md:h-[70vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${'https://images.pexels.com/photos/4636525/pexels-photo-4636525.jpeg'})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/60"></div>

        {/* Text */}
        <div className="relative z-10 text-center">
          <h2 className="uppercase text-4xl md:text-5xl font-semibold text-white">
            Something Beautiful Awaits
          </h2>
        </div>
      </div>
        {/* Hero / Main Content */}
        <div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Label */}
            <div
              className="inline-block mb-8 reveal-fade"
              style={{ animationDelay: "0s" }}>
              <span className="text-xs font-mono tracking-[0.3em] text-[#FE7743] uppercase border border-[#FE7743]/30 rounded-full px-5 py-2 bg-[#FE7743]/5">
                Something Beautiful Awaits
              </span>
            </div>

            {/* Main Heading — large cinematic hero */}
            <h1
              className="text-[clamp(4rem,14vw,11rem)] font-serif text-[#2E2A28] tracking-tight leading-[0.9] mb-8 reveal-fade"
              style={{ animationDelay: "0.2s" }}>
              Coming
              <br />
              <span className="text-[#FE7743] italic">Soon</span>
            </h1>

            {/* Decorative rule */}
            <div
              className="flex items-center justify-center gap-4 mb-10 reveal-fade"
              style={{ animationDelay: "0.38s" }}>
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#EAD7C5]"></div>
              <div className="flex gap-1.5 items-center">
                <div className="w-1 h-1 rounded-full bg-[#FE7743]/40"></div>
                <div className="w-2 h-2 rounded-full bg-[#FE7743]"></div>
                <div className="w-1 h-1 rounded-full bg-[#FE7743]/40"></div>
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#EAD7C5]"></div>
            </div>

            {/* Subtitle */}
            <p
              className="text-[#8F7A6B] text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-16 reveal-fade"
              style={{ animationDelay: "0.5s" }}>
              We're weaving something extraordinary — a new collection of
              stories crafted to move, inspire, and linger with you long after
              the last word.
            </p>

            {/* Feature highlights */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-16 reveal-fade"
              style={{ animationDelay: "0.6s" }}>
              {[
                {
                  icon: "✦",
                  title: "Curated Stories",
                  desc: "Every piece chosen for depth, beauty, and lasting resonance.",
                },
                {
                  icon: "◎",
                  title: "New Voices",
                  desc: "Emerging writers alongside celebrated authors — all under one roof.",
                },
                {
                  icon: "❧",
                  title: "Crafted to Last",
                  desc: "Typography and design that honours the words within.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="group flex flex-col items-center gap-3 p-7 bg-white/80 border border-[#EAD7C5] rounded-2xl shadow-sm hover:border-[#FE7743]/50 hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                  <span className="text-2xl text-[#FE7743] group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </span>
                  <h3 className="font-serif text-[#2E2A28] text-base tracking-wide">
                    {title}
                  </h3>
                  <p className="text-[#8F7A6B] text-sm font-light leading-relaxed text-center">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Email Signup */}
            <div className="reveal-fade" style={{ animationDelay: "0.75s" }}>
              {submitted ? (
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#FE7743]/10 border border-[#FE7743]/30 rounded-full">
                  <span className="text-[#FE7743] text-lg">✦</span>
                  <p className="text-[#2E2A28] font-mono tracking-wider text-sm">
                    You're on the list. We'll be in touch.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 w-full px-6 py-3 bg-white border border-[#EAD7C5] rounded-full text-[#2E2A28] font-mono text-sm tracking-wide placeholder-[#C4B5A8] focus:outline-none focus:border-[#FE7743] focus:ring-1 focus:ring-[#FE7743]/30 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="shrink-0 px-7 py-3 bg-[#FE7743] text-white rounded-full hover:bg-[#FE7743]/90 transition-colors duration-300 text-sm font-mono tracking-wider shadow-lg hover:shadow-xl">
                    NOTIFY ME
                  </button>
                </form>
              )}
              <p className="mt-4 text-xs font-mono tracking-wider text-[#C4B5A8]">
                No spam. Ever. Just stories worth reading.
              </p>
            </div>

            {/* Blockquote */}
            <div
              className="mt-16 pt-12 border-t border-[#EAD7C5] reveal-fade"
              style={{ animationDelay: "0.9s" }}>
              <blockquote className="relative pl-8 border-l-2 border-[#FE7743] py-2 text-left max-w-xl mx-auto">
                <p className="text-lg md:text-xl font-light text-[#2E2A28] italic leading-relaxed">
                  "The best stories don't just tell you what happened — they
                  show you who you are."
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Fixed decorative blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-[#FE7743]/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-[#FE7743]/5 blur-3xl"></div>
        </div>

        <style>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
            50% { transform: translateY(-20px) scale(1.2); opacity: 0.4; }
          }
          @keyframes reveal-fade {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-float-slow {
            animation: float-slow 8s infinite ease-in-out;
          }
          .reveal-fade {
            opacity: 0;
            animation: reveal-fade 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default ComingSoon;