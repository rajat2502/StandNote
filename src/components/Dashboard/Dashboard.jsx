import React, { useState, useEffect, useCallback } from 'react';

import { getAllNotes, deleteNote } from 'api';

import NotesCard from './NotesCard';

function Dashboard({ user }) {
  const [notesData, setNotesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNotesData = useCallback(async () => {
    const data = await getAllNotes(user.email);
    data.reverse();
    setNotesData(data);
    setLoading(false);
  }, [user.email]);

  const deleteNoteWithId = async (id) => {
    if (
      window.confirm('This action will delete the notes from your account!')
    ) {
      const data = notesData.filter((note) => note.id !== id);
      setNotesData(data);
      await deleteNote(id);
    }
  };

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
    <div className='flex justify-center flex-col p-4'>
      <h1 className='my-2 text-center text-4xl text-gray-700 font-bold'>
        All Meeting Notes
      </h1>
      <p className='m-6 font-bold text-gray-700'>
        Total Meeting(s): {notesData.length}
      </p>
      <div className='mt-6 flex justify-center lg:justify-start flex-wrap'>
        {notesData.length ? (
          notesData.map((note) => (
            <NotesCard
              key={note.id}
              data={note}
              deleteNoteWithId={deleteNoteWithId}
            />
          ))
        ) : (
          <h1 className='text-3xl font-bold mt-6 text-gray-800 m-auto'>
            No Meeting Notes available!
          </h1>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
