import React from 'react';
import { Link } from 'react-router-dom';

import Icon from 'components/Icon';

const NotesCard = ({ data, deleteNoteWithId }) => {
  const deletNotes = () => {
    deleteNoteWithId(data.id);
  };

  return (
    <div
      className='relative bg-white rounded-md shadow-md hover:shadow-lg m-6 pt-4'
      style={{ width: 300 }}
    >
      <Link to={`notes/${data.id}`} title={data.title}>
        <div className='p-2 flex justify-center relative'>
          <Icon name='notes' />
          <span className='rounded-full text-xs py-1 px-2 bg-gray-800 text-white absolute right-1 -bottom-1'>
            {data.duration}
          </span>
        </div>
        <div className='rounded-b-md bg-gray-800 text-white p-2 flex justify-between items-center mt-2'>
          <p className='font-medium capitalize'>{data.title}</p>
          <p className='text-xs'>
            {new Date(data.created_at.slice(0, 10)).toLocaleDateString()}
          </p>
        </div>
      </Link>
      <span
        title='Delete Notes'
        className='cursor-pointer absolute top-3 right-2'
        onClick={() => deletNotes()}
      >
        <Icon name='delete' />
      </span>
    </div>
  );
};

export default NotesCard;
