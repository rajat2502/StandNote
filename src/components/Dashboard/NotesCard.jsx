import React from 'react';
import { Link } from 'react-router-dom';

const NotesCard = ({ data }) => {
  return (
    <Link
      to={`notes/${data.id}`}
      className='bg-white rounded shadow-md hover:shadow-lg p-4 m-6'
      style={{ width: 310 }}
    >
      <div className='relative'>
        <img
          alt='notes'
          src='https://clickup.com/blog/wp-content/uploads/2020/01/note-taking-1400x1050.png'
        />
        <span className='rounded-full text-sm py-1 px-3 bg-gray-800 text-white absolute right-1 bottom-1'>
          {data.duration}
        </span>
      </div>
      <div className='flex justify-between items-center mt-2'>
        <p className='font-medium capitalize'>{data.title}</p>
        <p className='text-sm'>
          {new Date(data.created_at.slice(0, 10)).toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
};

export default NotesCard;
