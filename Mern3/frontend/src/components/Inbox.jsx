import React, { useState } from 'react';
import { MdCropSquare, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdInbox } from 'react-icons/md';
import { FaCaretDown } from 'react-icons/fa';
import { IoMdMore, IoMdRefresh } from 'react-icons/io';
import Emails from './Emails';

const Inbox = () => {
  const [selected, setSelected] = useState(0);

  const mailTypes = [
    {
      icon: <MdInbox size={'28px'} />,
      text: "Primary"
    },
    {
      icon: <MdInbox size={'28px'} />,
      text: "Promotions"
    },
    {
      icon: <MdInbox size={'20px'} />,
      text: "Social"
    }
  ];

  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-2'>
          <div className="flex items-center gap-1">
            <MdCropSquare size={'20px'} />
            <FaCaretDown size={'20px'} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <IoMdRefresh size={'28px'} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <IoMdMore size={'28px'} />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <span>1 to 50</span>
          <MdKeyboardArrowLeft size="24px" />
          <MdKeyboardArrowRight size="24px" />
        </div>
      </div>
      <div className="h-98vh overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailTypes.map((item, index) => (
            <button
              key={index}
              className={`border-l-4 ${selected === index ? 'border-b-blue-500 text-blue-500' : 'border-white-500 text-amber-500'} flex items-center gap-5 p-4 w-52 hover:bg-gray-200`}
              onClick={() => setSelected(index)}
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>
          <Emails/>
      </div>
    </div>
  );
};

export default Inbox;
