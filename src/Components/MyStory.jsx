// import React from 'react';
// import { Link } from 'react-router-dom';

// const MyStory = () => {
//     const stories = [
//         {
//             id: 1,
//             title: 'The Lost Kingdom of Eldoria',
//             excerpt: 'In a realm where magic flowed like rivers, a young heir discovers her destiny to restore the ancient kingdom of Eldoria from the shadows of oblivion.',
//             image: "https://images.pexels.com/photos/3646105/pexels-photo-3646105.jpeg",
//             theme: 'Destiny & Heritage',
//             color: 'text-[#FE7743]'
//         },
//         {
//             id: 2,
//             title: 'Whispers of the Silent Forest',
//             excerpt: 'Deep within the enchanted woods, a guardian spirit awakens to protect the balance between nature and civilization from a growing darkness.',
//             image: "https://images.pexels.com/photos/3646105/pexels-photo-3646105.jpeg",
//             theme: 'Nature & Balance',
//             color: 'text-[#FE7743]'
//         },
//         {
//             id: 3,
//             title: 'The Last Dragon Rider',
//             excerpt: 'Centuries after the great dragon wars, a farm boy forms an unlikely bond with the last surviving dragon, becoming humanity\'s final hope.',
//             image: "https://images.pexels.com/photos/3646105/pexels-photo-3646105.jpeg",
//             theme: 'Courage & Bond',
//             color: 'text-[#FE7743]'
//         },
//         {
//             id: 4,
//             title: 'Chronicles of the Astral Mages',
//             excerpt: 'A guild of stargazer mages must unlock celestial secrets to prevent a cosmic prophecy that threatens to unravel the very fabric of reality.',
//             image: "https://images.pexels.com/photos/3646105/pexels-photo-3646105.jpeg",
//             theme: 'Magic & Prophecy',
//             color: 'text-[#FE7743]'
//         },
//         {
//             id: 5,
//             title: 'The Pirate Queen\'s Compass',
//             excerpt: 'On the treacherous Sapphire Seas, a cunning pirate captain searches for a legendary compass that points not to treasure, but to forgotten truths.',
//             image: "https://images.pexels.com/photos/3646105/pexels-photo-3646105.jpeg",
//             theme: 'Freedom & Discovery',
//             color: 'text-[#FE7743]'
//         },
//         {
//             id: 6,
//             title: 'The Alchemist\'s Promise',
//             excerpt: 'In a city where science outshines magic, a reclusive alchemist risks everything to create a philosopher\'s stone that could save his dying sister.',
//             image: "https://images.pexels.com/photos/3646105/pexels-photo-3646105.jpeg",
//             theme: 'Sacrifice & Love',
//             color: 'text-[#FE7743]'
//         }
//     ];

//     return (
//         <section className="relative w-full bg-[#FFFDF6] overflow-hidden font-serif">
//             <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
//                  {/* Enchanted Header Section */}
//                 <div className="text-center mb-20 md:mb-24 ">      
//                     <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#2E2A28] mb-6 tracking-tight">
//                         Story
//                         <span className="relative inline-block ml-4 text-[#FE7743]">
//                             Collection
//                             <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FE7743] to-transparent"></span>
//                         </span>
//                     </h1>
                
//                     <p className="max-w-3xl mx-auto mt-10 text-[#5C5550] text-base sm:text-lg font-light leading-relaxed">
//                         Step into worlds where ink whispers secrets and parchment holds the weight of destiny. 
//                         Within these pages, heroes rise, legends breathe, and every tale is a doorway to the infinite.
//                     </p>
//                 </div>

//                 {/* Chronicles Grid — Gallery of Dreams */}
//                 <div className="space-y-12">
//                     <div className="flex items-center justify-between border-b border-[#EAD7C5] pb-6">
//                         <div className="flex items-center gap-4">
//                             <h2 className="text-2xl md:text-3xl font-serif text-[#2E2A28] tracking-wide">
//                                 Chronicles of Imagination
//                             </h2>
//                         </div>
//                         <span className="text-[#8F7A6B] text-sm font-mono tracking-wider bg-white/60 px-4 py-2 rounded-full border border-[#EAD7C5]">
//                             {stories.length} tales
//                         </span>
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
//                         {stories.map((story, index) => {
                           
//                             return (
//                                 <article 
//                                     key={story.id}
//                                     className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ease-out flex flex-col reveal-slide-up"
//                                     style={{ animationDelay: `${index * 0.15}s` }}
//                                 >
//                                     {/* Visual corner accent — subtle elegance */}
//                                     {/* <div className="absolute top-0 left-0 w-16 h-16 z-10 pointer-events-none">
//                                         <div className="absolute top-3 left-3 w-8 h-px bg-[#FE7743]/30 group-hover:w-12 transition-all duration-500"></div>
//                                         <div className="absolute top-3 left-3 w-px h-8 bg-[#FE7743]/30 group-hover:h-12 transition-all duration-500"></div>
//                                     </div>
//                                     <div className="absolute bottom-0 right-0 w-16 h-16 z-10 pointer-events-none">
//                                         <div className="absolute bottom-3 right-3 w-8 h-px bg-[#FE7743]/30 group-hover:w-12 transition-all duration-500"></div>
//                                         <div className="absolute bottom-3 right-3 w-px h-8 bg-[#FE7743]/30 group-hover:h-12 transition-all duration-500"></div>
//                                     </div> */}

//                                     {/* Image container — artistic frame */}
//                                     <div className="relative h-64 w-full overflow-hidden">
//                                         <div className="absolute inset-0 bg-gradient-to-t from-[#2E2A28] via-transparent to-transparent opacity-60 z-10"></div>
//                                         <img 
//                                             src={story.image} 
//                                             alt={story.title}
//                                             className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-in-out"
//                                             loading="lazy"
//                                         />
                                       
//                                         {/* Theme pill — minimalist */}
//                                         <div className="absolute bottom-4 left-4 z-20">
//                                             <span className="px-4 py-1.5 bg-black/20 backdrop-blur-md text-white text-xs font-mono tracking-wider rounded-full border border-white/30 shadow-sm">
//                                                 {story.theme}
//                                             </span>
//                                         </div>
//                                     </div>

//                                     {/* Content — like fine press typography */}
//                                     <div className="p-7 bg-white">
//                                         <div className="flex items-start justify-between mb-3">
//                                             <h3 className="text-xl md:text-2xl font-serif text-[#2E2A28] group-hover:text-[#FE7743] transition-colors duration-300 leading-tight pr-4">
//                                                 {story.title}
//                                             </h3>
//                                         </div>
                                        
//                                         <p className="text-[#6B625C] text-sm font-light leading-relaxed mb-5 line-clamp-3">
//                                             {story.excerpt}
//                                         </p>
                                    

//                                         {/* Refined call to action */}
//                                         <div className="mt-6 flex items-center justify-between">
//                                             <Link 
//                                                 to={`/story/${story.id}`}
//                                                 className="group/link inline-flex items-center gap-3 text-[#FE7743] hover:text-[#FE7743]/80 text-sm font-mono tracking-wider transition-all duration-300"
//                                             >
//                                                 <span>ENTER STORY</span>
//                                                 <span className="transform group-hover/link:translate-x-1.5 group-hover/link:-translate-y-1 transition-transform duration-300">→</span>
//                                             </Link>
                                            
//                                         </div>
//                                     </div>
//                                 </article>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>

//             {/* Sophisticated animations — pure css elegance */}
//             <style jsx>{`
//                 @keyframes float-slow {
//                     0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
//                     50% { transform: translateY(-20px) scale(1.2); opacity: 0.4; }
//                 }
                
//                 @keyframes reveal-fade {
//                     from { opacity: 0; transform: translateY(20px); filter: blur(2px); }
//                     to { opacity: 1; transform: translateY(0); filter: blur(0); }
//                 }
                
//                 @keyframes reveal-slide-up {
//                     from { opacity: 0; transform: translateY(40px); }
//                     to { opacity: 1; transform: translateY(0); }
//                 }
                
//                 .animate-float-slow {
//                     animation: float-slow 8s infinite ease-in-out;
//                 }
                
//                 .reveal-fade {
//                     animation: reveal-fade 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
//                 }
                
//                 .reveal-slide-up {
//                     opacity: 0;
//                     animation: reveal-slide-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
//                 }
                
//                 .delay-150 { animation-delay: 0.15s; }
//                 .delay-300 { animation-delay: 0.3s; }
//                 .delay-450 { animation-delay: 0.45s; }
//                 .delay-600 { animation-delay: 0.6s; }
                
//                 .line-clamp-3 {
//                     display: -webkit-box;
//                     -webkit-line-clamp: 3;
//                     -webkit-box-orient: vertical;
//                     overflow: hidden;
//                 }
                
//                 /* Subtle image enhancement */
//                 .group:hover img {
//                     filter: brightness(1.08) contrast(1.02);
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default MyStory;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import storiesData from '../data/stories.json';

// const MyStory = () => {
//     const stories = storiesData.stories;

//     return (
//         <section className="relative w-full bg-[#FFFDF6] overflow-hidden font-serif">
//             <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
//                  {/* Enchanted Header Section */}
//                 <div className="text-center mb-20 md:mb-24 ">      
//                     <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#2E2A28] mb-6 tracking-tight">
//                         Story
//                         <span className="relative inline-block ml-4 text-[#FE7743]">
//                             Collection
//                             <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FE7743] to-transparent"></span>
//                         </span>
//                     </h1>
                
//                     <p className="max-w-3xl mx-auto mt-10 text-[#5C5550] text-base sm:text-lg font-light leading-relaxed">
//                         Step into worlds where ink whispers secrets and parchment holds the weight of destiny. 
//                         Within these pages, heroes rise, legends breathe, and every tale is a doorway to the infinite.
//                     </p>
//                 </div>

//                 {/* Chronicles Grid — Gallery of Dreams */}
//                 <div className="space-y-12">
//                     <div className="flex items-center justify-between border-b border-[#EAD7C5] pb-6">
//                         <div className="flex items-center gap-4">
//                             <h2 className="text-2xl md:text-3xl font-serif text-[#2E2A28] tracking-wide">
//                                 Chronicles of Imagination
//                             </h2>
//                         </div>
//                         <span className="text-[#8F7A6B] text-sm font-mono tracking-wider bg-white/60 px-4 py-2 rounded-full border border-[#EAD7C5]">
//                             {stories.length} tales
//                         </span>
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
//                         {stories.map((story, index) => {
                           
//                             return (
//                                 <article 
//                                     key={story.id}
//                                     className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ease-out flex flex-col reveal-slide-up"
//                                     style={{ animationDelay: `${index * 0.15}s` }}
//                                 >
//                                     {/* Image container — artistic frame */}
//                                     <div className="relative h-64 w-full overflow-hidden">
//                                         <div className="absolute inset-0 bg-gradient-to-t from-[#2E2A28] via-transparent to-transparent opacity-60 z-10"></div>
//                                         <img 
//                                             src={story.image} 
//                                             alt={story.title}
//                                             className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-in-out"
//                                             loading="lazy"
//                                         />
                                       
//                                         {/* Theme pill — minimalist */}
//                                         <div className="absolute bottom-4 left-4 z-20">
//                                             <span className="px-4 py-1.5 bg-black/20 backdrop-blur-md text-white text-xs font-mono tracking-wider rounded-full border border-white/30 shadow-sm">
//                                                 {story.theme}
//                                             </span>
//                                         </div>
//                                     </div>

//                                     {/* Content — like fine press typography */}
//                                     <div className="p-7 bg-white">
//                                         <div className="flex items-start justify-between mb-3">
//                                             <h3 className="text-xl md:text-2xl font-serif text-[#2E2A28] group-hover:text-[#FE7743] transition-colors duration-300 leading-tight pr-4">
//                                                 {story.title}
//                                             </h3>
//                                         </div>
                                        
//                                         <p className="text-[#6B625C] text-sm font-light leading-relaxed mb-5 line-clamp-3">
//                                             {story.excerpt}
//                                         </p>
                                    

//                                         {/* Refined call to action */}
//                                         <div className="mt-6 flex items-center justify-between">
//                                             <Link 
//                                                 to={`/story/${story.id}`}
//                                                 className="group/link inline-flex items-center gap-3 text-[#FE7743] hover:text-[#FE7743]/80 text-sm font-mono tracking-wider transition-all duration-300"
//                                             >
//                                                 <span>ENTER STORY</span>
//                                                 <span className="transform group-hover/link:translate-x-1.5 group-hover/link:-translate-y-1 transition-transform duration-300">→</span>
//                                             </Link>
                                            
//                                         </div>
//                                     </div>
//                                 </article>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>

//             {/* Sophisticated animations — pure css elegance */}
//             <style jsx>{`
//                 @keyframes float-slow {
//                     0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
//                     50% { transform: translateY(-20px) scale(1.2); opacity: 0.4; }
//                 }
                
//                 @keyframes reveal-fade {
//                     from { opacity: 0; transform: translateY(20px); filter: blur(2px); }
//                     to { opacity: 1; transform: translateY(0); filter: blur(0); }
//                 }
                
//                 @keyframes reveal-slide-up {
//                     from { opacity: 0; transform: translateY(40px); }
//                     to { opacity: 1; transform: translateY(0); }
//                 }
                
//                 .animate-float-slow {
//                     animation: float-slow 8s infinite ease-in-out;
//                 }
                
//                 .reveal-fade {
//                     animation: reveal-fade 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
//                 }
                
//                 .reveal-slide-up {
//                     opacity: 0;
//                     animation: reveal-slide-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
//                 }
                
//                 .delay-150 { animation-delay: 0.15s; }
//                 .delay-300 { animation-delay: 0.3s; }
//                 .delay-450 { animation-delay: 0.45s; }
//                 .delay-600 { animation-delay: 0.6s; }
                
//                 .line-clamp-3 {
//                     display: -webkit-box;
//                     -webkit-line-clamp: 3;
//                     -webkit-box-orient: vertical;
//                     overflow: hidden;
//                 }
                
//                 /* Subtle image enhancement */
//                 .group:hover img {
//                     filter: brightness(1.08) contrast(1.02);
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default MyStory;

import React from 'react';
import { Link } from 'react-router-dom';
import storiesData from '../data/stories.json';

const MyStory = () => {
    const stories = storiesData.stories;

    return (
        <section className="relative w-full bg-[#FFFDF6] overflow-hidden font-serif">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
                 {/* Enchanted Header Section */}
                <div className="text-center mb-20 md:mb-24 ">      
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#2E2A28] mb-6 tracking-tight">
                        Story
                        <span className="relative inline-block ml-4 text-[#FE7743]">
                            Collection
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FE7743] to-transparent"></span>
                        </span>
                    </h1>
                
                    <p className="max-w-3xl mx-auto mt-10 text-[#5C5550] text-base sm:text-lg font-light leading-relaxed">
                        Step into worlds where ink whispers secrets and parchment holds the weight of destiny. 
                        Within these pages, heroes rise, legends breathe, and every tale is a doorway to the infinite.
                    </p>
                </div>

                {/* Chronicles Grid — Gallery of Dreams */}
                <div className="space-y-12">
                    <div className="flex items-center justify-between border-b border-[#EAD7C5] pb-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-2xl md:text-3xl font-serif text-[#2E2A28] tracking-wide">
                                Chronicles of Imagination
                            </h2>
                        </div>
                        <span className="text-[#8F7A6B] text-sm font-mono tracking-wider bg-white/60 px-4 py-2 rounded-full border border-[#EAD7C5]">
                            {stories.length} tales
                        </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {stories.map((story, index) => {
                            return (
                                <article 
                                    key={story.id}
                                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ease-out flex flex-col reveal-slide-up"
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    {/* Image container — artistic frame */}
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#2E2A28] via-transparent to-transparent opacity-60 z-10"></div>
                                        <img 
                                            src={story.image} 
                                            alt={story.title}
                                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                                            loading="lazy"
                                        />
                                       
                                        {/* Theme pill — minimalist */}
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <span className="px-4 py-1.5 bg-black/20 backdrop-blur-md text-white text-xs font-mono tracking-wider rounded-full border border-white/30 shadow-sm">
                                                {story.theme}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content — like fine press typography */}
                                    <div className="p-7 bg-white">
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="text-xl md:text-2xl font-serif text-[#2E2A28] group-hover:text-[#FE7743] transition-colors duration-300 leading-tight pr-4">
                                                {story.title}
                                            </h3>
                                        </div>
                                        
                                        <p className="text-[#6B625C] text-sm font-light leading-relaxed mb-5 line-clamp-3">
                                            {story.excerpt}
                                        </p>
                                    

                                        {/* Refined call to action */}
                                        <div className="mt-6 flex items-center justify-between">
                                            <Link 
                                                to={`/story/${story.slug}`}
                                                className="group/link inline-flex items-center gap-3 text-[#FE7743] hover:text-[#FE7743]/80 text-sm font-mono tracking-wider transition-all duration-300"
                                            >
                                                <span>ENTER STORY</span>
                                                <span className="transform group-hover/link:translate-x-1.5 group-hover/link:-translate-y-1 transition-transform duration-300">→</span>
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Sophisticated animations — pure css elegance */}
            <style jsx>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
                    50% { transform: translateY(-20px) scale(1.2); opacity: 0.4; }
                }
                
                @keyframes reveal-fade {
                    from { opacity: 0; transform: translateY(20px); filter: blur(2px); }
                    to { opacity: 1; transform: translateY(0); filter: blur(0); }
                }
                
                @keyframes reveal-slide-up {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-float-slow {
                    animation: float-slow 8s infinite ease-in-out;
                }
                
                .reveal-fade {
                    animation: reveal-fade 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                }
                
                .reveal-slide-up {
                    opacity: 0;
                    animation: reveal-slide-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                }
                
                .delay-150 { animation-delay: 0.15s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-450 { animation-delay: 0.45s; }
                .delay-600 { animation-delay: 0.6s; }
                
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                /* Subtle image enhancement */
                .group:hover img {
                    filter: brightness(1.08) contrast(1.02);
                }
            `}</style>
        </section>
    );
};

export default MyStory;