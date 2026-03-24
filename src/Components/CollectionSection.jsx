import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';

const CollectionSection = ({
    title,
    description,
    sectionTitle,
    items,
    badge,
    linkLabel,
    linkClassName,
    getLink,
    getMeta,
    showArrow = false
}) => {
    const safeItems = Array.isArray(items) ? items : [];
    const footerClassName = getMeta
        ? "mt-6 flex items-center justify-between"
        : "mt-6 flex items-center justify-end";

    return (
        <section className="relative w-full bg-[#FFFDF6] overflow-hidden font-serif">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
                <div className="text-center mb-20 md:mb-24">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#2E2A28] mb-6 tracking-tight">
                        {title}
                        <span className="relative inline-block ml-4 text-[#FE7743]">
                            Collection
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FE7743] to-transparent"></span>
                        </span>
                    </h1>

                    <p className="max-w-3xl mx-auto mt-10 text-[#5C5550] text-base sm:text-lg font-light leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="space-y-12">
                    <div className="flex items-center justify-between border-b border-[#EAD7C5] pb-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-2xl md:text-3xl font-serif text-[#2E2A28] tracking-wide">
                                {sectionTitle}
                            </h2>
                        </div>
                        {badge ? (
                            <span className="text-[#8F7A6B] text-sm font-mono tracking-wider bg-white/60 px-4 py-2 rounded-full border border-[#EAD7C5]">
                                {badge.type === 'link' ? (
                                    <Link to={badge.to}>{badge.label}</Link>
                                ) : (
                                    badge.label
                                )}
                            </span>
                        ) : null}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {safeItems.map((item, index) => (
                            <Motion.article
                                key={item.id ?? index}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ease-out flex flex-col"
                                initial={{ opacity: 0, y: 28, scale: 0.985 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                            >
                                <div className="relative h-64 w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E2A28] via-transparent to-transparent opacity-60 z-10"></div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                                        loading="lazy"
                                    />

                                    <div className="absolute bottom-4 left-4 z-20">
                                        <span className="px-4 py-1.5 bg-black/20 backdrop-blur-md text-white text-xs font-mono tracking-wider rounded-full border border-white/30 shadow-sm">
                                            {item.theme}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-7 bg-white">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl md:text-2xl font-serif text-[#2E2A28] group-hover:text-[#FE7743] transition-colors duration-300 leading-tight pr-4">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="text-[#6B625C] text-sm font-light leading-relaxed mb-5 line-clamp-3">
                                        {item.excerpt}
                                    </p>

                                    <div className={footerClassName}>
                                        {getMeta ? (
                                            <span className="text-[#8F7A6B] text-xs font-mono tracking-wider">
                                                {getMeta(item)}
                                            </span>
                                        ) : null}
                                        <Link to={getLink(item)} className={linkClassName}>
                                            <span>{linkLabel}</span>
                                            {showArrow ? (
                                                <span className="transform group-hover:translate-x-1.5 group-hover:-translate-y-1 transition-transform duration-300">-&gt;</span>
                                            ) : null}
                                        </Link>
                                    </div>
                                </div>
                            </Motion.article>
                        ))}
                    </div>
                </div>
            </div>

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

                .group:hover img {
                    filter: brightness(1.08) contrast(1.02);
                }
            `}</style>
        </section>
    );
};

export default CollectionSection;
