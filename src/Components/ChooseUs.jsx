import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Feather,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import storiesData from '../data/stories.json';
import poemsData from '../data/poem.json';

const reasons = [
  {
    icon: Feather,
    title: 'Handcrafted Writing',
    description:
      'Each story is written with heart, detail, and emotional depth so every page feels alive.',
  },
  {
    icon: BookOpen,
    title: 'Meaningful Collections',
    description:
      'Stories and poems are curated in a way that helps readers discover the right mood instantly.',
  },
  {
    icon: ShieldCheck,
    title: 'Clean Reading Space',
    description:
      'A distraction-light reading layout keeps the focus on your imagination and the words.',
  },
  {
    icon: Clock3,
    title: 'Growing Library',
    description:
      'New chapters and verses are added over time so there is always something fresh to read.',
  },
];

const ChooseUs = () => {
  const storiesCount = storiesData?.stories?.length ?? 0;
  const poemsCount = poemsData?.poems?.length ?? 0;

  const highlights = [
    { label: 'Published Stories', value: `${storiesCount}` },
    { label: 'Published Poems', value: `${poemsCount}` },
    { label: 'Reader Promise', value: 'Warm Experience' },
  ];

  const promises = [
    'Emotion-driven storytelling with clean structure',
    'Consistent visual style across every section',
    'Simple navigation for both mobile and desktop',
    'A personal world built for story lovers',
  ];

  return (
    <section className="relative w-full bg-[#FFFDF6] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FE7743]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FE7743]/20 to-transparent" />
        <div className="absolute top-16 right-12 w-64 h-64 rounded-full bg-[#FE7743]/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-[#FE7743]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FE7743]/30 bg-[#FE7743]/5 mb-6">
            <Sparkles className="w-4 h-4 text-[#FE7743]" />
            <span className="text-[#FE7743] text-xs sm:text-sm font-light tracking-[0.2em] uppercase">
              Why Readers Choose Us
            </span>
            <HeartHandshake className="w-4 h-4 text-[#FE7743]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#2D2D2D] tracking-wide">
            The Reason to Stay in
            <span className="block text-[#FE7743] mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Our Story World
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-[#4A4A4A] text-sm sm:text-base font-light leading-relaxed">
            We built this platform to feel personal, warm, and immersive. Every section follows
            the same design language so your journey feels smooth from the first scroll to the
            final line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {reasons.map((item) => {
              const IconComponent = item.icon;

              return (
                <article
                  key={item.title}
                  className="group p-5 sm:p-6 rounded-2xl border border-[#FE7743]/15 bg-[#F8F6F0] hover:bg-[#FE7743]/5 hover:border-[#FE7743]/40 transition-all duration-500"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FE7743]/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[#FE7743] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif text-[#2D2D2D] group-hover:text-[#FE7743] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#4A4A4A]/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl border border-[#FE7743]/20 bg-white">
            <h3 className="text-2xl font-serif text-[#2D2D2D]">
              What You Get Here
            </h3>
            <div className="h-px w-16 bg-[#FE7743]/40 mt-3 mb-5" />

            <ul className="space-y-3">
              {promises.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FE7743] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#4A4A4A] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/story"
              className="group mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FE7743] text-white text-xs sm:text-sm tracking-[0.15em] uppercase hover:bg-[#FE7743]/90 transition-all duration-300"
            >
              Explore Stories
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-[#FE7743]/15 bg-[#F8F6F0] px-5 py-4 text-center"
            >
              <p className="text-2xl sm:text-3xl font-serif text-[#FE7743]">{item.value}</p>
              <p className="mt-1 text-xs sm:text-sm tracking-[0.12em] uppercase text-[#4A4A4A]/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
