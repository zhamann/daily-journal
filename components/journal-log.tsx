import React from 'react';
import JournalCard from './journal-card';
import data from '../data/journal.json';

const journals = data.journal;

const JournalLog = () => {
    return (
      <div>
        {journals.map((journal) => (
          <JournalCard date={journal.date} text={journal.text} />
        ))}
      </div>
    );
  };
  
  export default JournalLog;