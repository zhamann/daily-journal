import React from 'react';

interface JournalCardProps {
  date: string | null;
  text: string | null;
}

const JournalCard: React.FC<JournalCardProps> = ({ date, text }) => {
    return (
      <a href='#' className="border-b border-gray-200 p-4 text-sm bg-white flex flex-col">
        <div className="mb-2">{date}</div>
        <div className="truncate">{text}</div>
      </a>
    );
  };
  
  export default JournalCard;