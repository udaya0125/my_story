import React from 'react';
import { Link } from 'react-router-dom';
import { Scroll, Sparkles, Compass, Users, BookOpen, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const storyLinks = [
        { name: 'The Awakening', path: '/chronicles/awakening', icon: BookOpen },
        { name: 'The Discovery', path: '/chronicles/discovery', icon: Compass },
        { name: 'The Destiny', path: '/chronicles/destiny', icon: Sparkles },
        { name: 'The Prophecy', path: '/chronicles/legacy', icon: Scroll }
    ];

    const realmsLinks = [
        { name: 'Mystic Forest', path: '/realms/mystic-forest' },
        { name: 'Crystal Caves', path: '/realms/crystal-caves' },
        { name: 'Sky Islands', path: '/realms/sky-islands' },
        { name: 'Ancient Temple', path: '/realms/ancient-temple' }
    ];

    const charactersLinks = [
        { name: 'Elder Spirits', path: '/characters/elder-spirits' },
        { name: 'Guardians', path: '/characters/guardians' },
        { name: 'Mythical Beings', path: '/characters/mythical-beings' },
        { name: 'The Lost Chapter', path: '/legends/lost-chapter' }
    ];

    const socialLinks = [
        { name: 'Tales', icon: Scroll },
        { name: 'Legends', icon: Scroll },
        { name: 'Chronicles', icon: BookOpen },
        { name: 'Myths', icon: Sparkles }
    ];

    return (
        <footer className="relative w-full bg-black/90">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
                    
                    {/* Brand Section - Left */}
                    <div className="lg:col-span-4 space-y-4 md:space-y-6">
                        <Link to="/" className="inline-block group">
                            <h2 className="text-2xl md:text-3xl font-serif text-white tracking-[0.3em] group-hover:text-[#FE7743] transition-colors duration-300">
                                WHISPERS
                            </h2>
                            <p className="text-[10px] md:text-xs tracking-[0.4em] font-light text-white/90 mt-2 group-hover:text-[#FE7743]/90 transition-colors duration-300">
                                OF THE FORGOTTEN
                            </p>
                        </Link>
                        
                        <p className="text-white/90 text-sm md:text-base font-light leading-relaxed max-w-md">
                            An epic tale of ancient spirits, forgotten magic, and a prophecy that will change everything. 
                            The journey begins where whispers echo through time.
                        </p>
                        
                        {/* Minimalist Contact Info */}
                        <div className="space-y-2 pt-4">
                            <div className="flex items-center gap-3 text-white/90 hover:text-[#FE7743]/80 transition-colors duration-300 group">
                                <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-xs md:text-sm font-light">The Forgotten Realms</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/90 hover:text-[#FE7743]/80 transition-colors duration-300 group">
                                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-xs md:text-sm font-light">whispers@theforgotten.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Story Links - Center Left */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-white text-xs md:text-sm font-light tracking-[0.2em] uppercase border-b border-[#FE7743]/30 pb-2 inline-block">
                            The Story
                        </h3>
                        <ul className="space-y-3">
                            {storyLinks.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                    <li key={link.name}>
                                        <Link 
                                            to={link.path}
                                            className="group flex items-center gap-2 text-white/90 hover:text-[#FE7743] text-sm font-light transition-all duration-300"
                                        >
                                            <IconComponent className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                                {link.name}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Realms Links - Center Right */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-white text-xs md:text-sm font-light tracking-[0.2em] uppercase border-b border-[#FE7743]/30 pb-2 inline-block">
                            The Realms
                        </h3>
                        <ul className="space-y-3">
                            {realmsLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        to={link.path}
                                        className="group flex items-center gap-2 text-white/90 hover:text-[#FE7743] text-sm font-light transition-all duration-300"
                                    >
                                        <Compass className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            {link.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Characters Links - Right */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-white text-xs md:text-sm font-light tracking-[0.2em] uppercase border-b border-[#FE7743]/30 pb-2 inline-block">
                            Characters
                        </h3>
                        <ul className="space-y-3">
                            {charactersLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        to={link.path}
                                        className="group flex items-center gap-2 text-white/90 hover:text-[#FE7743] text-sm font-light transition-all duration-300"
                                    >
                                        <Users className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            {link.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar - Perfectly Centered */}
                <div className="flex justify-center items-center pt-4 border-t border-white/20">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                        <div className="flex items-center gap-2">
                            <p className="text-white/70 text-xs md:text-sm font-light">
                                © {currentYear}{' '}
                                <a 
                                    href="https://udaya-adhikari.com.np" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#FE7743] transition-colors duration-300 border-b border-transparent hover:border-[#FE7743]/30"
                                >
                                    Udaya Adhikari
                                </a>
                            </p>
                            <span className="text-white/40 hidden sm:inline">•</span>
                        </div>
                        <p className="text-white/70 text-xs md:text-sm font-light">
                            All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;