"use client"
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 

type FCProps = {
  question: string;
  answer: string;
};

const FaqCard = ({ question, answer }: FCProps) => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(prev => !prev);
  };

  return (
    <div className="w-full border rounded-md my-1">
      <div
        className={`flex items-center text-sm md:text-base justify-between p-2 md:p-3 cursor-pointer ${expand? 'bg-light-green': 'bg-white'}`}
        onClick={toggleExpand}
      >
        <span className="font-normal">{question}</span>
        <span className='text-blackish-green'>
          {expand ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {expand && (
        <div className="p-2 md:p-4 text-sm md:text-base border-t border-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
