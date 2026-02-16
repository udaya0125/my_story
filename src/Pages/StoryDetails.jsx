// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import Navigation from '../Components/Navigation';
// import Footer from '../Components/Footer';

// const StoryDetails = () => {
//     const { id } = useParams();
    
//     const stories = [
//         {
//             id: 1,
//             title: 'The Lost Kingdom of Eldoria',
//             excerpt: 'In a realm where magic flowed like rivers, a young heir discovers her destiny to restore the ancient kingdom of Eldoria from the shadows of oblivion.',
//             image: "https://images.pexels.com/photos/3646105/pexels-photo-3646105.jpeg",
//             theme: 'Destiny & Heritage',
//             author: 'Elara Moonwhisper',
//             publishedDate: 'Spring Equinox, 2024',
//             readTime: '12 min read',
//             genre: ['Fantasy', 'Adventure', 'Coming of Age'],
//             fullStory: `The dawn broke over the Crystalline Mountains, painting the sky in hues of amber and rose. Princess Seraphina stood at the edge of the Royal Balcony, her silver hair catching the first light of morning. Today marked the beginning of her journey—a journey that would either restore the lost kingdom of Eldoria or doom it to eternal darkness.

// For centuries, Eldoria had been nothing more than a whispered legend, a kingdom that vanished in a single night when the Shadow Veil descended. The ancient texts spoke of a heir who would one day possess the power to pierce the veil and reclaim what was lost. Seraphina never believed she would be that heir.

// Her grandmother's words echoed in her mind: "Magic flows through you like rivers through ancient valleys, child. You are not merely of royal blood—you are of the old blood, the blood that remembers when mountains were young and dragons soared freely."

// The journey would take her through the Whispering Woods, where trees spoke in forgotten tongues. She would cross the Mirror Lakes, whose waters reflected not what was, but what could be. And finally, she would face the Shadow Keep, where the source of the veil resided.

// As Seraphina descended the marble stairs, her hand instinctively touched the pendant around her neck—the Starfire Amulet, the only artifact that survived Eldoria's fall. It pulsed with warmth, as if responding to her determination.

// In the courtyard below, her companions awaited. Theron, the enigmatic ranger who had pledged his bow to her cause. Lady Celeste, a scholar of ancient magic whose knowledge would prove invaluable. And Finn, the young thief with a heart of gold and secrets darker than the veil itself.

// "Are you ready, Princess?" Theron asked, his green eyes reflecting concern and admiration in equal measure.

// Seraphina smiled, a mixture of fear and resolve dancing across her features. "Ready as I'll ever be. Eldoria has waited long enough."

// As they passed through the city gates, citizens lined the streets. Some waved in hope, others watched in silence, wondering if they beheld a savior or witnessed a fool's errand. Children threw flowers that shimmered with residual magic, a blessing from the old ways.

// The Whispering Woods welcomed them with an eerie symphony. Ancient oaks bent their boughs as if in greeting, while willows swayed to music only they could hear. The deeper they ventured, the more the forest seemed alive with purpose.

// On the third night, as they camped near a crystalline stream, the woods whispered their first warning. Shadow creatures, remnants of the veil's dark magic, emerged from the darkness. The battle was fierce but brief. Seraphina's Starfire Amulet blazed with light, banishing the shadows to nothingness.

// "Your power grows," Celeste observed, examining the amulet's glow. "The closer we get to Eldoria, the stronger it becomes. But be warned—the same is true of the darkness that guards it."

// Days turned to weeks as they journeyed onward. Each step brought new challenges: riddles from ancient spirits, tests of courage and wisdom, moments where hope seemed as distant as the stars. Yet through it all, Seraphina discovered something profound—she was not just fighting for a lost kingdom, but for the belief that light could triumph over darkness, that hope could survive even the longest night.

// When they finally stood before the Shadow Keep, the veil shimmered like black silk stretched across reality itself. Beyond it, ghostly images of Eldoria flickered—spires of crystal and gold, gardens where flowers bloomed eternal, the faces of ancestors long thought lost.

// "This is it," Seraphina whispered, her hand tightening around the amulet. "Grandmother, guide my hand."

// She raised the Starfire Amulet high, and it erupted in brilliant radiance. The veil writhed and screamed, shadows taking form and lunging toward her. But Seraphina stood firm, channeling centuries of magic through her bloodline, through the amulet, through her unshakeable will.

// The battle between light and shadow raged for what felt like an eternity. Then, with a sound like breaking glass, the veil shattered. Magic poured forth like a river finding its course again, washing over the land in waves of pure luminescence.

// Eldoria emerged from the shadows. The lost kingdom, preserved in time, stood as magnificent as the day it vanished. And in the city's heart, the ancient throne sat empty, waiting for its heir to claim her birthright.

// As Seraphina stepped through the remnants of the veil, into the kingdom her bloodline had protected through centuries of exile, she understood at last: destiny was not about being chosen. It was about choosing to stand when others would fall, to hope when despair seemed certain, to believe that even lost kingdoms could be found again.

// The dawn of a new era had begun, and Princess Seraphina—now Queen of Eldoria—would ensure her people never walked in shadow again.`,
//             quotes: [
//                 '"Magic flows through you like rivers through ancient valleys, child. You are not merely of royal blood—you are of the old blood."',
//                 '"Destiny was not about being chosen. It was about choosing to stand when others would fall."'
//             ]
//         },
//         {
//             id: 2,
//             title: 'Whispers of the Silent Forest',
//             excerpt: 'Deep within the enchanted woods, a guardian spirit awakens to protect the balance between nature and civilization from a growing darkness.',
//             image: "https://images.pexels.com/photos/3646105/pexels-photo-3646105.jpeg",
//             theme: 'Nature & Balance',
//             author: 'Thornwood Sage',
//             publishedDate: 'Autumn Solstice, 2024',
//             readTime: '10 min read',
//             genre: ['Fantasy', 'Environmental', 'Spiritual'],
//             fullStory: `In the heart of the Evergreen Realm, where ancient trees touched the clouds and roots delved deep into the earth's memory, Sylvaris stirred from her thousand-year slumber. She was the Guardian, born of bark and starlight, created to maintain the sacred balance between the wild and the civilized world.

// But something was wrong. The forest's song, once harmonious and full of life, now carried discordant notes of pain and fear. The Whispering Pines, eldest of all trees, trembled with warnings Sylvaris had never heard before.

// She manifested in physical form—a being of flowing green energy and living wood, eyes like pools of moonlit amber. As her consciousness expanded through root and branch, Sylvaris witnessed the source of the corruption: a creeping darkness that consumed life itself, leaving only ash and silence in its wake.

// This was no natural force. This was the Blight, an ancient evil that had been sealed away millennia ago. Someone—or something—had broken the seal.

// The story continues with Sylvaris gathering allies from both forest and city, learning that true balance requires understanding, not isolation, and that the greatest strength lies in unity between all living things...`,
//             quotes: [
//                 '"The forest does not speak in words, but in whispers of wind through leaves, in the patient growth of roots seeking water."',
//                 '"Balance is not the absence of conflict, but the harmony found within it."'
//             ]
//         },
//         {
//             id: 3,
//             title: 'The Last Dragon Rider',
//             excerpt: 'Centuries after the great dragon wars, a farm boy forms an unlikely bond with the last surviving dragon, becoming humanity\'s final hope.',
//             image: "https://images.pexels.com/photos/3646105/pexels-photo-3646105.jpeg",
//             theme: 'Courage & Bond',
//             author: 'Drake Ashenheart',
//             publishedDate: 'Midsummer, 2024',
//             readTime: '15 min read',
//             genre: ['Fantasy', 'Adventure', 'Friendship'],
//             fullStory: `Kael had spent seventeen years believing dragons were extinct, relegated to dusty history books and old men's tales. Working the fields of his family's modest farm in the borderlands, he never imagined his life would change the day he found the cave.

// It was supposed to be a routine trip to check the north pasture. Instead, he stumbled into a cavern that reeked of sulfur and ancient magic. And there, coiled in the darkness, scales gleaming like polished obsidian, lay Emberwing—the last dragon.

// She was smaller than the legends described, her wings torn, one eye scarred shut. But when their eyes met, Kael felt something profound click into place, like a lock finding its key. The dragon spoke directly into his mind: "So, the old bonds awaken once more. Tell me, young one, are you prepared for what destiny asks of you?"

// The story continues as Kael learns to ride, discovers the true cause of the dragon wars, and faces an ancient enemy that threatens to destroy both human and dragon alike...`,
//             quotes: [
//                 '"A dragon does not choose a rider by strength, but by the courage that lives within their heart."',
//                 '"Sometimes the greatest bonds are forged in the fires of the most unlikely friendships."'
//             ]
//         },
//         {
//             id: 4,
//             title: 'Chronicles of the Astral Mages',
//             excerpt: 'A guild of stargazer mages must unlock celestial secrets to prevent a cosmic prophecy that threatens to unravel the very fabric of reality.',
//             image: "https://images.pexels.com/photos/3646105/pexels-photo-3646105.jpeg",
//             theme: 'Magic & Prophecy',
//             author: 'Celestia Voidweaver',
//             publishedDate: 'Winter Solstice, 2024',
//             readTime: '14 min read',
//             genre: ['Fantasy', 'Mystery', 'Cosmic'],
//             fullStory: `The Stellar Observatory stood atop Mount Aetheria, its crystalline dome reflecting the dance of countless stars. Within its halls, the Astral Mages studied the heavens, reading destinies written in constellations and tracking the celestial mechanics that governed reality itself.

// Novitiate Lyra Starweaver had always possessed an unusual gift—she could see the threads that connected stars to souls, past to future, cause to effect. When the ancient texts spoke of the Unweaving, a cosmic event that would tear apart the fabric of existence, most dismissed it as metaphor. But Lyra had seen it: a void spreading through the celestial tapestry, consuming light and possibility.

// The prophecy was specific: "When the Void Star rises in the constellation of the Forgotten, only those who walk between worlds can mend what threatens to break." The problem? No one knew what the Void Star was, the constellation of the Forgotten had been lost to time, and walking between worlds was considered impossible.

// Gathering a group of unlikely allies—a disgraced chronomancer, a cartographer of impossible places, and a being that claimed to be from beyond the veil of stars—Lyra embarked on a quest through reality's hidden layers. They would journey through pocket dimensions, navigate temporal paradoxes, and ultimately face a truth that would shake the foundations of their understanding: reality itself was conscious, and it was dying...`,
//             quotes: [
//                 '"The stars do not merely shine—they remember. Every light in the sky is a story waiting to be read."',
//                 '"Magic is not about bending reality to your will, but understanding that reality itself is the greatest magic of all."'
//             ]
//         },
//         {
//             id: 5,
//             title: 'The Pirate Queen\'s Compass',
//             excerpt: 'On the treacherous Sapphire Seas, a cunning pirate captain searches for a legendary compass that points not to treasure, but to forgotten truths.',
//             image: "https://images.pexels.com/photos/3646105/pexels-photo-3646105.jpeg",
//             theme: 'Freedom & Discovery',
//             author: 'Captain Marlowe Tidebreaker',
//             publishedDate: 'Spring Storm, 2024',
//             readTime: '11 min read',
//             genre: ['Fantasy', 'Adventure', 'Mystery'],
//             fullStory: `Captain Reyna Blackwater commanded the fastest ship on the Sapphire Seas—the Serpent's Kiss, a vessel that seemed to dance across waves rather than sail them. She had earned her reputation through cunning, courage, and an uncanny ability to find what others believed lost.

// But the Compass of Verity was different. Legends claimed it didn't point to gold or jewels, but to truth itself—the truth of who you really were, what you truly sought, where you actually belonged. Most dismissed it as a philosopher's fancy. Reyna knew better.

// The compass had belonged to her mother, the original Pirate Queen, who vanished mysteriously twenty years ago. The cryptic map she left behind showed only one thing: "The compass lies where truth meets the tide, where the sea remembers what the land has forgotten."

// Her quest would take her through the Shattered Isles, where reality fractured into pocket worlds. She would face the Siren Council, negotiate with the Sea Witch of Calypso Deep, and ultimately confront the reason her mother vanished—a secret about the Sapphire Seas themselves that powerful forces wanted buried forever...`,
//             quotes: [
//                 '"The sea keeps no secrets—it simply waits for those brave enough to dive deep enough to find them."',
//                 '"Freedom is not the absence of chains, but the courage to break them, no matter the cost."'
//             ]
//         },
//         {
//             id: 6,
//             title: 'The Alchemist\'s Promise',
//             excerpt: 'In a city where science outshines magic, a reclusive alchemist risks everything to create a philosopher\'s stone that could save his dying sister.',
//             image: "https://images.pexels.com/photos/3646105/pexels-photo-3646105.jpeg",
//             theme: 'Sacrifice & Love',
//             author: 'Aurelius Goldmist',
//             publishedDate: 'Harvest Moon, 2024',
//             readTime: '13 min read',
//             genre: ['Fantasy', 'Drama', 'Family'],
//             fullStory: `In the brass-and-steam city of Mechanica, where clockwork replaced magic and science reigned supreme, Master Alchemist Dorian Ashford worked in secret. While the world above celebrated technological progress, he delved into forbidden texts, seeking the one achievement that had eluded alchemists for millennia: the Philosopher's Stone.

// His motivation was pure and desperate—his younger sister, Elara, suffered from the Fading, a magical illness that science couldn't cure and medicine couldn't touch. She had perhaps three months to live, her very essence slowly dissolving like mist in morning sun.

// The Philosopher's Stone, legendary transmuter of lead to gold, held a greater secret: it could stabilize a soul, anchor it permanently to the physical world. But the cost of creating it was immense. The final ingredient required the alchemist to sacrifice something of ultimate personal value—something they loved more than their own life.

// As Dorian stood in his laboratory, surrounded by bubbling retorts and ancient symbols, he faced an impossible choice. The formula was complete. The ritual prepared. But to save Elara, he would have to give up something he couldn't imagine losing...`,
//             quotes: [
//                 '"The greatest transmutation is not of metal to gold, but of despair to hope, of fear to love."',
//                 '"Science measures what is. Alchemy explores what could be. But love transcends both."'
//             ]
//         }
//     ];

//     const story = stories.find(s => s.id === parseInt(id));

//     if (!story) {
//         return (
//             <div className="min-h-screen bg-[#FFFDF6] flex items-center justify-center">
//                 <div className="text-center">
//                     <h1 className="text-4xl font-serif text-[#2E2A28] mb-4">Story Not Found</h1>
//                     <Link to="/" className="text-[#FE7743] hover:underline">Return to Collection</Link>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <>
//         <Navigation/>
//         <div className="relative w-full bg-[#FFFDF6] overflow-hidden font-serif">
//             {/* Hero Section with Parallax Effect */}
//             <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2E2A28]/50 to-[#FFFDF6] z-10"></div>
//                 <img 
//                     src={story.image} 
//                     alt={story.title}
//                     className="w-full h-full object-cover object-center"
//                 />
                
//                 {/* Floating decorative elements */}
//                 <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
//                     <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#FE7743]/10 blur-3xl animate-float-slow"></div>
//                     <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-[#FE7743]/10 blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
//                 </div>

//                 {/* Title Overlay */}
//                 <div className="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
//                     <div className="max-w-4xl mx-auto">
//                         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4 tracking-tight reveal-fade">
//                             {story.title}
//                         </h1>
//                         <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-3xl reveal-fade">
//                             {story.excerpt}
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
//                 {/* Story Metadata */}
//                 <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#EAD7C5]">
//                     <div className="flex items-center gap-6 text-sm text-[#8F7A6B]">
//                         <div className="flex items-center gap-2">
//                             <span className="font-mono tracking-wider">By</span>
//                             <span className="font-serif text-[#2E2A28]">{story.author}</span>
//                         </div>
//                         <span className="w-px h-4 bg-[#EAD7C5]"></span>
//                         <div className="font-mono tracking-wider">{story.publishedDate}</div>
//                         <span className="w-px h-4 bg-[#EAD7C5]"></span>
//                         <div className="font-mono tracking-wider">{story.readTime}</div>
//                     </div>
//                 </div>

//                 {/* Story Content */}
//                 <article className="prose prose-lg max-w-none">
//                     <div className="text-[#2E2A28] leading-relaxed space-y-6 text-justify">
//                         {story.fullStory.split('\n\n').map((paragraph, index) => (
//                             <p key={index} className="text-base md:text-lg font-light">
//                                 {paragraph}
//                             </p>
//                         ))}
//                     </div>
//                 </article>

//                 {/* Memorable Quotes Section */}
//                 {story.quotes && story.quotes.length > 0 && (
//                     <div className="mt-16 pt-12 border-t border-[#EAD7C5]">
//                         <h2 className="text-2xl md:text-3xl font-serif text-[#2E2A28] mb-8 text-center">
//                             Memorable Passages
//                         </h2>
//                         <div className="space-y-8">
//                             {story.quotes.map((quote, index) => (
//                                 <blockquote 
//                                     key={index}
//                                     className="relative pl-8 md:pl-12 border-l-2 border-[#FE7743] py-2"
//                                 >
//                                     <p className="text-lg md:text-xl font-light text-[#2E2A28] italic leading-relaxed">
//                                         {quote}
//                                     </p>
//                                 </blockquote>
//                             ))}
//                         </div>
//                     </div>
//                 )}

//                 {/* Navigation Footer */}
//                 <div className="mt-16 pt-12 border-t border-[#EAD7C5]">
//                     <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
//                         <Link 
//                             to="/"
//                             className="group inline-flex items-center gap-3 text-[#FE7743] hover:text-[#FE7743]/80 text-sm font-mono tracking-wider transition-all duration-300"
//                         >
//                             <span className="transform group-hover:-translate-x-1.5 transition-transform duration-300">←</span>
//                             <span>RETURN TO COLLECTION</span>
//                         </Link>
                        
//                         <div className="flex items-center gap-4">
//                             <button className="px-6 py-2.5 bg-[#FE7743] text-white rounded-full hover:bg-[#FE7743]/90 transition-colors duration-300 text-sm font-mono tracking-wider shadow-lg hover:shadow-xl">
//                                 SAVE STORY
//                             </button>
//                             <button className="px-6 py-2.5 bg-white border border-[#EAD7C5] text-[#2E2A28] rounded-full hover:border-[#FE7743] hover:text-[#FE7743] transition-all duration-300 text-sm font-mono tracking-wider">
//                                 SHARE
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Decorative Background Elements */}
//             <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
//                 <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-[#FE7743]/5 blur-3xl"></div>
//                 <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-[#FE7743]/5 blur-3xl"></div>
//             </div>

//             {/* Animations */}
//             <style jsx>{`
//                 @keyframes float-slow {
//                     0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
//                     50% { transform: translateY(-20px) scale(1.2); opacity: 0.4; }
//                 }
                
//                 @keyframes reveal-fade {
//                     from { opacity: 0; transform: translateY(20px); }
//                     to { opacity: 1; transform: translateY(0); }
//                 }
                
//                 .animate-float-slow {
//                     animation: float-slow 8s infinite ease-in-out;
//                 }
                
//                 .reveal-fade {
//                     animation: reveal-fade 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
//                 }
//             `}</style>
//         </div>
//         <Footer/>
//         </>
//     );
// };

// export default StoryDetails;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import storiesData from '../data/stories.json';

const StoryDetails = () => {
    const { id } = useParams();
    const stories = storiesData.stories;
    const story = stories.find(s => s.id === parseInt(id));

    if (!story) {
        return (
            <div className="min-h-screen bg-[#FFFDF6] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-serif text-[#2E2A28] mb-4">Story Not Found</h1>
                    <Link to="/" className="text-[#FE7743] hover:underline">Return to Collection</Link>
                </div>
            </div>
        );
    }

    return (
        <>
        <Navigation/>
        <div className="relative w-full bg-[#FFFDF6] overflow-hidden font-serif">
            {/* Hero Section with Parallax Effect */}
            <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2E2A28]/50 to-[#FFFDF6] z-10"></div>
                <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover object-center"
                />
                
                {/* Floating decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
                    <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#FE7743]/10 blur-3xl animate-float-slow"></div>
                    <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-[#FE7743]/10 blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4 tracking-tight reveal-fade">
                            {story.title}
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-3xl reveal-fade">
                            {story.excerpt}
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Story Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#EAD7C5]">
                    <div className="flex items-center gap-6 text-sm text-[#8F7A6B]">
                        <div className="flex items-center gap-2">
                            <span className="font-mono tracking-wider">By</span>
                            <span className="font-serif text-[#2E2A28]">{story.author}</span>
                        </div>
                        <span className="w-px h-4 bg-[#EAD7C5]"></span>
                        <div className="font-mono tracking-wider">{story.publishedDate}</div>
                        <span className="w-px h-4 bg-[#EAD7C5]"></span>
                        <div className="font-mono tracking-wider">{story.readTime}</div>
                    </div>
                </div>

                {/* Story Content */}
                <article className="prose prose-lg max-w-none">
                    <div className="text-[#2E2A28] leading-relaxed space-y-6 text-justify">
                        {story.fullStory.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-base md:text-lg font-light">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </article>

                {/* Memorable Quotes Section */}
                {story.quotes && story.quotes.length > 0 && (
                    <div className="mt-16 pt-12 border-t border-[#EAD7C5]">
                        <h2 className="text-2xl md:text-3xl font-serif text-[#2E2A28] mb-8 text-center">
                            Memorable Passages
                        </h2>
                        <div className="space-y-8">
                            {story.quotes.map((quote, index) => (
                                <blockquote 
                                    key={index}
                                    className="relative pl-8 md:pl-12 border-l-2 border-[#FE7743] py-2"
                                >
                                    <p className="text-lg md:text-xl font-light text-[#2E2A28] italic leading-relaxed">
                                        {quote}
                                    </p>
                                </blockquote>
                            ))}
                        </div>
                    </div>
                )}

                {/* Navigation Footer */}
                <div className="mt-16 pt-12 border-t border-[#EAD7C5]">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <Link 
                            to="/"
                            className="group inline-flex items-center gap-3 text-[#FE7743] hover:text-[#FE7743]/80 text-sm font-mono tracking-wider transition-all duration-300"
                        >
                            <span className="transform group-hover:-translate-x-1.5 transition-transform duration-300">←</span>
                            <span>RETURN TO COLLECTION</span>
                        </Link>
                        
                        <div className="flex items-center gap-4">
                            <button className="px-6 py-2.5 bg-[#FE7743] text-white rounded-full hover:bg-[#FE7743]/90 transition-colors duration-300 text-sm font-mono tracking-wider shadow-lg hover:shadow-xl">
                                SAVE STORY
                            </button>
                            <button className="px-6 py-2.5 bg-white border border-[#EAD7C5] text-[#2E2A28] rounded-full hover:border-[#FE7743] hover:text-[#FE7743] transition-all duration-300 text-sm font-mono tracking-wider">
                                SHARE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-[#FE7743]/5 blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-[#FE7743]/5 blur-3xl"></div>
            </div>

            {/* Animations */}
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

export default StoryDetails;