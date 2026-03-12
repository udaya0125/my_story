import React from 'react';
import storiesData from '../data/stories.json';
import CollectionSection from './CollectionSection';

const MyStory = () => {
    const stories = storiesData.stories.slice(0, 3);

    return (
        <CollectionSection
            title="Story"
            description="Step into worlds where ink whispers secrets and parchment holds the weight of destiny. Within these pages, heroes rise, legends breathe, and every tale is a doorway to the infinite."
            sectionTitle="Chronicles of Imagination"
            items={stories}
            badge={{ type: 'link', label: 'View All Stories', to: '/story' }}
            linkLabel="ENTER STORY"
            linkClassName="group/link inline-flex items-center gap-3 text-[#FE7743] hover:text-[#FE7743]/80 text-sm font-mono tracking-wider transition-all duration-300"
            getLink={(story) => `/story/${story.slug}`}
            showArrow
        />
    );
};

export default MyStory;
