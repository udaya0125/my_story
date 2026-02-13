// AboutUs.jsx (Updated version with Journey component)
import React from 'react';
import { Link } from 'react-router-dom';
import { Scroll, Sparkles, Compass, Users, BookOpen, Heart, Star, Quote, Feather } from 'lucide-react';
import Journey from './Journey'; // Import the Journey component

const AboutUs = () => {
    return (
        <section className="relative w-full bg-[#FFFDF6] overflow-hidden">
            {/* Decorative gradient overlays - adjusted for light background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FE7743]/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FE7743]/20 to-transparent"></div>
                
                {/* Subtle glow effects - softened for light background */}
                <div className="absolute top-20 right-20 w-64 h-64 bg-[#FE7743]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#FE7743]/5 rounded-full blur-3xl"></div>
                
                {/* Floating particles */}
                <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-[#FE7743]/20 rounded-full animate-pulse"></div>
                <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-[#FE7743]/15 rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-[#FE7743]/15 rounded-full animate-pulse delay-700"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
                
                {/* Header Section - adjusted for light background */}
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FE7743]/30 bg-[#FE7743]/5 backdrop-blur-sm mb-6">
                        <Feather className="w-4 h-4 text-[#FE7743]" />
                        <span className="text-[#FE7743] text-xs sm:text-sm font-light tracking-[0.2em] uppercase">
                            The Story Behind
                        </span>
                        <Sparkles className="w-4 h-4 text-[#FE7743]" />
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#2D2D2D] mb-4 tracking-wider">
                        About the
                        <span className="block text-[#FE7743] mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                            Forgotten Realms
                        </span>
                    </h1>
                    
                    <div className="h-px w-20 sm:w-24 md:w-32 bg-[#FE7743]/50 mx-auto mt-6"></div>
                </div>

                {/* Main Content Grid - adjusted text colors for light background */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
                    
                    {/* Left Column - The Genesis */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 border-b border-[#FE7743]/30 pb-4">
                                <Scroll className="w-6 h-6 text-[#FE7743]" />
                                <h2 className="text-2xl sm:text-3xl font-serif text-[#2D2D2D] tracking-wide">
                                    The Genesis
                                </h2>
                            </div>
                            
                            <div className="space-y-4 text-[#4A4A4A] text-sm sm:text-base font-light leading-relaxed">
                                <p className="hover:text-[#2D2D2D] transition-colors duration-300">
                                    In the twilight of an age forgotten, where ancient spirits whispered through 
                                    the leaves of the Mystic Forest, a prophecy was born. Whispers of the Forgotten 
                                    is an epic tale that weaves together the threads of destiny, magic, and the 
                                    unbreakable bond between realms.
                                </p>
                                <p className="hover:text-[#2D2D2D] transition-colors duration-300">
                                    What began as a single story has blossomed into an expansive universe of 
                                    interconnected tales, each chapter revealing deeper mysteries and hidden truths 
                                    waiting to be discovered by those brave enough to listen.
                                </p>
                            </div>
                        </div>

                        {/* Quote Block - adjusted for light background */}
                        <div className="relative pl-6 border-l-2 border-[#FE7743]/50 hover:border-[#FE7743] transition-colors duration-300">
                            <Quote className="absolute -left-3 top-0 w-6 h-6 text-[#FE7743]/30" />
                            <p className="text-[#4A4A4A] text-base sm:text-lg font-serif italic">
                                "Every whisper carries a story, every shadow holds a secret, 
                                and every journey begins with a single step into the unknown."
                            </p>
                            <p className="text-[#FE7743]/80 text-xs sm:text-sm font-light tracking-wider mt-2">
                                — The Elder Spirits
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Our Mission & Values */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 border-b border-[#FE7743]/30 pb-4">
                                <Star className="w-6 h-6 text-[#FE7743]" />
                                <h2 className="text-2xl sm:text-3xl font-serif text-[#2D2D2D] tracking-wide">
                                    Our Mission
                                </h2>
                            </div>
                            
                            <p className="text-[#4A4A4A] text-sm sm:text-base font-light leading-relaxed hover:text-[#2D2D2D] transition-colors duration-300">
                                To craft immersive stories that transport readers to worlds beyond imagination, 
                                where ancient magic meets timeless wisdom, and every character's journey reflects 
                                the universal quest for purpose, belonging, and truth.
                            </p>
                        </div>

                        {/* Values Grid - adjusted for light background */}
                        <div className="space-y-6">
                            <h3 className="text-[#2D2D2D]/70 text-xs sm:text-sm font-light tracking-[0.2em] uppercase border-b border-[#FE7743]/30 pb-2 inline-block">
                                The Pillars
                            </h3>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        icon: Compass,
                                        title: 'Discovery',
                                        desc: 'Uncovering hidden truths and forgotten lore'
                                    },
                                    {
                                        icon: Users,
                                        title: 'Community',
                                        desc: 'Building a world for dreamers and storytellers'
                                    },
                                    {
                                        icon: Heart,
                                        title: 'Passion',
                                        desc: 'Crafted with love for the art of storytelling'
                                    },
                                    {
                                        icon: Sparkles,
                                        title: 'Magic',
                                        desc: 'Preserving the wonder of mythical tales'
                                    }
                                ].map((item) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <div 
                                            key={item.title}
                                            className="group p-4 bg-[#F8F6F0] hover:bg-[#FE7743]/5 border border-[#FE7743]/10 hover:border-[#FE7743]/30 rounded-lg transition-all duration-500"
                                        >
                                            <div className="flex items-start gap-3">
                                                <IconComponent className="w-5 h-5 text-[#FE7743] group-hover:scale-110 transition-transform duration-300" />
                                                <div className="space-y-1">
                                                    <h4 className="text-[#2D2D2D] text-sm font-medium tracking-wide">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-[#4A4A4A]/70 group-hover:text-[#4A4A4A] text-xs font-light">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Journey Component - Replaces the previous Journey and CTA sections */}
                <Journey />

            </div>

            {/* Custom CSS Animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
                
                .animate-slide-up {
                    animation: slide-up 0.8s ease-out forwards;
                    opacity: 0;
                }
                
                .delay-100 {
                    animation-delay: 0.1s;
                }
                
                .delay-300 {
                    animation-delay: 0.3s;
                }
                
                .delay-700 {
                    animation-delay: 0.7s;
                }
            `}</style>
        </section>
    );
};

export default AboutUs;