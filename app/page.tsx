'use client'

import { useState, ChangeEvent } from 'react';
import axios from 'axios';

const shortDate = new Date().toLocaleDateString('en-US');
const longDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

const HomePage: React.FC = () => {
  const [journalEntry, setJournalEntry] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setJournalEntry(value);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      console.log(journalEntry)
      await axios.post('/api/log', { date: shortDate, text: journalEntry });
      console.log('Data submitted successfully!');
      setJournalEntry('');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className={'card border p-8 drop-shadow-md rounded mb-4 bg-white flex flex-col w-screen'}>
      <div className="text-lg font-bold text-center">{longDate}</div>
      <hr className="m-2"></hr>
      <textarea
        name="journal"
        placeholder="Write to your journal here..."
        onChange={handleInputChange}
        value={journalEntry}
        className="border border-gray-300 p-2 mx-4 rounded mt-4 h-32"
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded mt-4"
      >
        Submit
      </button>
    </div>
  );
};

export default HomePage;
