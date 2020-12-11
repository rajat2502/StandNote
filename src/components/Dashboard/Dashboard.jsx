import React, { useState, useEffect, useCallback } from 'react';

import { getAllNotes } from 'api';

import NotesCard from './NotesCard';

function Dashboard({ user }) {
  const [notesData, setNotesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNotesData = useCallback(async () => {
    const data = await getAllNotes(user.email);
    setNotesData(data);
    setLoading(false);
  }, [user.email]);

  useEffect(() => {
    getNotesData();
  }, [getNotesData]);

  if (loading) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <img
          className='h-28'
          src={require('assets/loader.gif').default}
          alt='standnote-loader'
        />
      </div>
    );
  }

  return (
    <div className='p-4'>
      <h1 className='my-2 text-center text-4xl text-gray-700 font-bold'>
        All Meeting Notes
      </h1>
      <p className='my-2 font-bold text-gray-700'>
        Total Meetings: {notesData.length}
      </p>
      <div className='mt-6 flex justify-center flex-wrap'>
        {notesData.map((note) => (
          <NotesCard key={note.id} data={note} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
