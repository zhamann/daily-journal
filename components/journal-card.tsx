'use client'

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';

interface JournalCardProps {
  date: string | null;
  text: string | null;
}

const JournalCard: React.FC<JournalCardProps> = ({ date, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleDeletion = async (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    event.stopPropagation();
    event.preventDefault();
    try {
      await axios.post('/api/delete', { date: date });
      console.log('Data deleted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
    router.push('/');
  };

  return (
    <a
      href={`/${date?.replaceAll('/', '-')}`}
      className={`
        border-b border-gray-200 p-4 text-sm 
        ${pathname?.replaceAll('/', '-').slice(1) === date ? 'bg-[#F5F5F5]' : 'bg-white'} 
        flex flex-col
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-2 flex justify-between">
        {date}
        {isHovered && ( // Conditionally render the trashcan icon when the card is hovered over
          <div className="flex">
            <AiOutlineDelete size={20} color="red" onClick={handleDeletion}/>
          </div>
        )}
      </div>
      <div className="truncate">{text}</div>
      
    </a>
  );
};
  
export default JournalCard;