import React from 'react';

import JournalLog from './journal-log';
import data from '@/data/journal.json'

const journalLength = data.journal.length


const SideBar = () => {
    return (
        <div className="w-64 h-full border-r border-gray-200">
            <div className="h-16 bg-white px-6 drop-shadow-md flex justify-between">
                <div className="flex flex-col justify-center">
                    <div className="text-md font-bold">Journal Log</div>
                    <div className="text-sm">{journalLength} entries</div>
                </div>
                <a href="/" className="text-2xl font-bold flex flex-col justify-center cursor-pointer">
                   +
                </a>
                </div>
                <div className="h-[calc(100dvh-4rem)] overflow-y-auto bg-white">
                <JournalLog />
            </div>
        </div>
    );
  };
  
  export default SideBar;