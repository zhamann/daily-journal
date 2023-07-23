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
    const date = params.slug?.replaceAll('-', '/');
    const entry = journal.find((item) => item.date === date);
    const text = entry?.text || "Entry not found.";

    return (
        <div>
            <div>My Post: {date}</div>
            <div>Text: {text}</div>
        </div>
    );
};

export default JournalPage;