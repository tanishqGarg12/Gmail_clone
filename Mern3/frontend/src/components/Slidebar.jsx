import React from "react";
import { LuPencil } from "react-icons/lu";
import { MdInbox, MdOutlineWatchLater, MdOutlineDrafts } from 'react-icons/md';
import { IoMdStar } from 'react-icons/io';
import { TbSend } from 'react-icons/tb';
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";

const sidebarItems = [
  {
    icon: <MdInbox size={'26px'} />,
    text: "Inbox"
  },
  {
    icon: <IoMdStar size={'28px'} />,
    text: "Starred"
  },
  {
    icon: <MdOutlineWatchLater size={'20px'} />,
    text: "Watch Later"
  },
  {
    icon: <TbSend size={'20px'} />,
    text: "Sent"
  },
  {
    icon: <MdOutlineDrafts size={'20px'} />,
    text: "Drafts"
  },
  {
    icon: <MdInbox size={'20px'} />,
    text: "Inbox"
  }
];

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className='w-[15%]'>
      <div className='p-3'>
        <button onClick={()=>dispatch(setOpen(true))} className='flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md'>
          <LuPencil size="24px" />
          Compose
        </button>
      </div>
      <div className='text-gray-68'>
        {sidebarItems.map((item, index) => {
          return (
            <div
              key={index}
              className='flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer'
            >
              {item.icon}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
