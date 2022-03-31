import React from "react";
import { Edit2, Trash2 } from 'react-feather';

function PostActionDropdown({ onDelete, onEdit }) {
  return <div className='absolute top-7 right-7 bg-white z-50 mt-4 w-40 flex flex-col rounded-md shadow-sm'>
  <div className='px-2 py-2 w-full flex items-center border-b cursor-pointer' onClick={onEdit}>
    <Edit2 color='green' />
    <span className='ml-2'>Edit</span>
  </div>
  <div className='px-2 py-2 w-full flex items-center  cursor-pointer' onClick={() => {
    onDelete();
  }}>
    <Trash2 color='red' />
    <span className='ml-2'>Delete</span>
  </div>
</div>
}

export default PostActionDropdown;
