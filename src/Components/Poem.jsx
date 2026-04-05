import React from 'react';
import poemsData from '../data/poem.json';
import CollectionSection from './CollectionSection';

const Poem = () => {
    const poems = poemsData.poems.slice(0, 3);

    return (
        <CollectionSection
            title="Poem"
            description="Let each line be a lantern. These verses hold quiet storms, gentle mornings, and the music of memory."
            sectionTitle="Verses of Heart & Horizon"
            items={poems}
           badge={{ type: 'link', label: 'View All Stories', to: '/poem' }}
            linkLabel="READ POEM"
            linkClassName="text-[#FE7743] text-xs font-mono tracking-wider"
            getLink={(poem) => `/poem/${poem.slug}`}
            getMeta={(poem) => poem.author}
        />
    );
};

export default Poem;
