import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import poemsData from '../data/poem.json';

const PoemDetails = () => {
    const { slug } = useParams();
    const poems = poemsData.poems;
    const poem = poems.find(p => p.slug === slug);

    if (!poem) {
        return (
            <div className="min-h-screen bg-[#FFFDF6] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-serif text-[#2E2A28] mb-4">Poem Not Found</h1>
                    <Link to="/poem" className="text-[#FE7743] hover:underline">Return to Collection</Link>
                </div>
            </div>
        );
    }

    return (
        <>
        <Navigation/>
        <div className="relative w-full bg-[#FFFDF6] overflow-hidden font-serif">
            <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2E2A28]/50 to-[#FFFDF6] z-10"></div>
                <img 
                    src={poem.image} 
                    alt={poem.title}
                    className="w-full h-full object-cover object-center"
                />
                
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
                    <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#FE7743]/10 blur-3xl animate-float-slow"></div>
                    <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-[#FE7743]/10 blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4 tracking-tight reveal-fade">
                            {poem.title}
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-3xl reveal-fade">
                            {poem.excerpt}
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#EAD7C5]">
                    <div className="flex items-center gap-6 text-sm text-[#8F7A6B]">
                        <div className="flex items-center gap-2">
                            <span className="font-mono tracking-wider">By</span>
                            <span className="font-serif text-[#2E2A28]">{poem.author}</span>
                        </div>
                        <span className="w-px h-4 bg-[#EAD7C5]"></span>
                        <div className="font-mono tracking-wider">{poem.publishedDate}</div>
                        <span className="w-px h-4 bg-[#EAD7C5]"></span>
                        <div className="font-mono tracking-wider">{poem.readTime}</div>
                    </div>
                </div>

                <article className="prose prose-lg max-w-none">
                    <div className="text-[#2E2A28] leading-relaxed space-y-6 text-justify">
                        {poem.fullPoem.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-base md:text-lg font-light whitespace-pre-line">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </article>

                <div className="mt-16 pt-12 border-t border-[#EAD7C5]">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <Link 
                            to="/poem"
                            className="group inline-flex items-center gap-3 text-[#FE7743] hover:text-[#FE7743]/80 text-sm font-mono tracking-wider transition-all duration-300"
                        >
                            <span className="transform group-hover:-translate-x-1.5 transition-transform duration-300">â†</span>
                            <span>RETURN TO POEMS</span>
                        </Link>
                        
                        <div className="flex items-center gap-4">
                            <button className="px-6 py-2.5 bg-[#FE7743] text-white rounded-full hover:bg-[#FE7743]/90 transition-colors duration-300 text-sm font-mono tracking-wider shadow-lg hover:shadow-xl">
                                SAVE POEM
                            </button>
                            <button className="px-6 py-2.5 bg-white border border-[#EAD7C5] text-[#2E2A28] rounded-full hover:border-[#FE7743] hover:text-[#FE7743] transition-all duration-300 text-sm font-mono tracking-wider">
                                SHARE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-[#FE7743]/5 blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-[#FE7743]/5 blur-3xl"></div>
            </div>

            <style jsx>{`
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
                    animation: reveal-fade 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                }
            `}</style>
        </div>
        <Footer/>
        </>
    );
};

export default PoemDetails;
