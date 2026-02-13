// Journey.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Scroll, Compass, Sparkles, Heart } from 'lucide-react';

const Journey = () => {
  const books = [
    {
      year: 'Book I',
      title: 'Awakening',
      desc: 'The prophecy is revealed as ancient spirits begin to stir',
      icon: Scroll,
      color: 'text-[#FE7743]'
    },
    {
      year: 'Book II',
      title: 'Discovery',
      desc: 'Heroes emerge and secrets of the realms are unveiled',
      icon: Compass,
      color: 'text-[#FE7743]'
    },
    {
      year: 'Book III',
      title: 'Destiny',
      desc: 'Paths converge and the true meaning of the prophecy unfolds',
      icon: Sparkles,
      color: 'text-[#FE7743]'
    }
  ];

  return (
    <>
      {/* The Journey So Far */}
      <div className="mt-16 md:mt-20 lg:mt-24">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <BookOpen className="w-5 h-5 text-[#FE7743]" />
          <h2 className="text-xl sm:text-2xl font-serif text-[#2D2D2D] tracking-wide">
            The Journey So Far
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {books.map((book) => {
            const IconComponent = book.icon;
            return (
              <div 
                key={book.title}
                className="group relative p-6 bg-[#FFFDF6] border border-[#FE7743]/10 hover:border-[#FE7743]/30 transition-all duration-500"
              >
                {/* Decorative corner lines */}
                <div className="absolute top-0 left-0 w-8 h-px bg-[#FE7743]/30 group-hover:w-12 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-px h-8 bg-[#FE7743]/30 group-hover:h-12 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-px bg-[#FE7743]/30 group-hover:w-12 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-px h-8 bg-[#FE7743]/30 group-hover:h-12 transition-all duration-500"></div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#FE7743]/60 text-xs font-light tracking-[0.2em] uppercase">
                      {book.year}
                    </span>
                    <IconComponent className="w-5 h-5 text-[#FE7743]/40 group-hover:text-[#FE7743] group-hover:rotate-12 transition-all duration-300" />
                  </div>
                  <h3 className="text-[#2D2D2D] text-xl font-serif group-hover:text-[#FE7743] transition-colors duration-300">
                    {book.title}
                  </h3>
                  <p className="text-[#4A4A4A]/70 group-hover:text-[#4A4A4A] text-sm font-light leading-relaxed">
                    {book.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="relative mt-16 md:mt-20 lg:mt-24 pt-8 md:pt-10 border-t border-[#FE7743]/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-[#FE7743]" />
            <span className="text-[#4A4A4A] text-sm md:text-base font-light tracking-wide">
              Join us on this epic journey through the Forgotten Realms
            </span>
          </div>
          <Link 
            to="/begin-journey"
            className="group flex items-center gap-3 px-6 py-3 bg-[#FE7743] hover:bg-[#FE7743]/90 text-white transition-all duration-300"
          >
            <span className="text-xs md:text-sm font-light tracking-[0.2em] uppercase">
              Begin Your Tale
            </span>
            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default Journey;