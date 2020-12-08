import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <Link
      to='/'
      className='bg-white rounded shadow-md hover:shadow-lg p-4 m-6'
      style={{ width: 310 }}
    >
      <img
        alt='notes'
        src='https://clickup.com/blog/wp-content/uploads/2020/01/note-taking-1400x1050.png'
      />
      <div className='flex justify-between text-sm mt-2 font-medium'>
        <p>StandUp-102 Notes</p>
        <p>24/12/2020</p>
      </div>
    </Link>
  );
};

export default Card;
