import React from 'react';
import data from '@/data/journal.json';

interface JournalProps {
    params: {
        slug: string
    }
}

interface JournalEntry {
    date: string;
    text: string;
}

interface JournalData {
    journal: JournalEntry[];
}

const journalData: JournalData = data as JournalData;
const journal: JournalEntry[] = journalData.journal;

const JournalPage: React.FC<JournalProps> = ({ params }) => {
    // Match the date
    const date = params.slug?.replaceAll('-', '/');
    const entry = journal.find((item) => item.date === date);

    // Format the date for the card
    const formattedDate = new Date(`${date}`).toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    const text = entry?.text || "Entry not found.";

    return (
        <div className={'card border p-8 drop-shadow-md rounded mb-4 bg-white flex flex-col'}>
            <div className="text-lg font-bold text-center">{formattedDate}</div>
            <hr className="m-2"></hr>
            <div className='mt-4 mx-4'>{text}</div>
        </div>
    );
};

export default JournalPage;