import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Scroll, Compass, Users } from 'lucide-react';

const Hero = ({ menuOpen, onMenuToggle }) => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Background Image with Story-themed overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg')", // Replace with your story image
                }}
            >
                {/* Gradient overlay with #FE7743 accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C]/90 via-[#0A0F1C]/70 to-[#0A0F1C]/90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#FE7743]/20 via-transparent to-transparent"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#FE7743]/5 blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#FE7743]/10 blur-3xl"></div>
                
                {/* Floating particles effect */}
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#FE7743]/40 rounded-full animate-pulse"></div>
                <div className="absolute top-3/4 left-2/3 w-2 h-2 bg-[#FE7743]/30 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[#FE7743]/40 rounded-full animate-pulse delay-700"></div>
            </div>

            {/* Content Container - Epic Story Theme */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-7xl mx-auto text-center">
                    
                    {/* Badge/Story Label */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FE7743]/30 bg-[#FE7743]/10 backdrop-blur-sm mb-6 sm:mb-8 md:mb-12 animate-fade-in">
                        <Scroll className="w-4 h-4 text-[#FE7743]" />
                        <span className="text-[#FE7743] text-xs sm:text-sm font-light tracking-[0.2em] uppercase">
                            An Epic Tale Unfolds
                        </span>
                        <Sparkles className="w-4 h-4 text-[#FE7743]" />
                    </div>

                    {/* Main Title - Whispers of the Forgotten */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white mb-4 sm:mb-6 md:mb-8 tracking-wider animate-slide-up">
                        Whispers of
                        <span className="block text-[#FE7743] mt-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                            the Forgotten
                        </span>
                    </h1>

                    {/* Subtitle/Logline */}
                    <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 font-light leading-relaxed animate-slide-up delay-100">
                        In a world where ancient spirits awaken and forgotten magic stirs, 
                        a prophecy long buried rises from the ashes. The journey begins now.
                    </p>

                    {/* Story Chapters Grid - Replacing Stay, Explore, Dine */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-12 md:mt-16 lg:mt-20">
                        
                        {/* Chapter I: Awakening */}
                        {/* <Link to="/chronicles/awakening" className="group cursor-pointer">
                            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 p-6 rounded-2xl hover:bg-white/5 transition-all duration-500">
                                <div className="relative inline-block">
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white transition-all duration-500 group-hover:text-[#FE7743] group-hover:scale-110">
                                        Awakening
                                    </h2>
                                    <div className="absolute -inset-2 bg-[#FE7743]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="h-px w-16 sm:w-20 md:w-24 bg-[#FE7743]/50 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                <p className="text-white/60 group-hover:text-[#FE7743]/80 text-xs sm:text-sm md:text-base font-light tracking-wider transition-colors duration-300">
                                    Book I • The Call
                                </p>
                                <div className="flex items-center justify-center gap-2 text-white/40 group-hover:text-[#FE7743] transition-colors duration-300">
                                    <span className="text-xs uppercase tracking-[0.2em]">Begin Journey</span>
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        </Link> */}

                        {/* Chapter II: Discovery */}
                        {/* <Link to="/chronicles/discovery" className="group cursor-pointer">
                            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 p-6 rounded-2xl hover:bg-white/5 transition-all duration-500">
                                <div className="relative inline-block">
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white transition-all duration-500 group-hover:text-[#FE7743] group-hover:scale-110">
                                        Discovery
                                    </h2>
                                    <div className="absolute -inset-2 bg-[#FE7743]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="h-px w-16 sm:w-20 md:w-24 bg-[#FE7743]/50 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                <p className="text-white/60 group-hover:text-[#FE7743]/80 text-xs sm:text-sm md:text-base font-light tracking-wider transition-colors duration-300">
                                    Book II • The Quest
                                </p>
                                <div className="flex items-center justify-center gap-2 text-white/40 group-hover:text-[#FE7743] transition-colors duration-300">
                                    <span className="text-xs uppercase tracking-[0.2em]">Explore Realms</span>
                                    <Compass className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300" />
                                </div>
                            </div>
                        </Link> */}

                        {/* Chapter III: Destiny */}
                        {/* <Link to="/chronicles/destiny" className="group cursor-pointer">
                            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 p-6 rounded-2xl hover:bg-white/5 transition-all duration-500">
                                <div className="relative inline-block">
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white transition-all duration-500 group-hover:text-[#FE7743] group-hover:scale-110">
                                        Destiny
                                    </h2>
                                    <div className="absolute -inset-2 bg-[#FE7743]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="h-px w-16 sm:w-20 md:w-24 bg-[#FE7743]/50 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                <p className="text-white/60 group-hover:text-[#FE7743]/80 text-xs sm:text-sm md:text-base font-light tracking-wider transition-colors duration-300">
                                    Book III • The Prophecy
                                </p>
                                <div className="flex items-center justify-center gap-2 text-white/40 group-hover:text-[#FE7743] transition-colors duration-300">
                                    <span className="text-xs uppercase tracking-[0.2em]">Unveil Fate</span>
                                    <Sparkles className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-300" />
                                </div>
                            </div>
                        </Link> */}
                    </div>

                    {/* Additional Story Navigation */}
                    {/* <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-12 md:mt-16 lg:mt-20">
                        <Link 
                            to="/map" 
                            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-[#FE7743]/50 bg-transparent hover:bg-[#FE7743]/10 transition-all duration-300"
                        >
                            <span className="text-white/80 group-hover:text-[#FE7743] text-sm font-light tracking-wider">
                                Explore the World
                            </span>
                            <Compass className="w-4 h-4 text-white/60 group-hover:text-[#FE7743] group-hover:rotate-12 transition-all duration-300" />
                        </Link>
                        
                        <Link 
                            to="/characters" 
                            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-[#FE7743]/50 bg-transparent hover:bg-[#FE7743]/10 transition-all duration-300"
                        >
                            <span className="text-white/80 group-hover:text-[#FE7743] text-sm font-light tracking-wider">
                                Meet the Characters
                            </span>
                            <Users className="w-4 h-4 text-white/60 group-hover:text-[#FE7743] transition-colors duration-300" />
                        </Link>
                    </div> */}

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Scroll to Explore</span>
                            <div className="w-px h-8 bg-gradient-to-b from-[#FE7743] to-transparent"></div>
                        </div>
                    </div>
                </div>
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
        </div>
    );
};

export default Hero;