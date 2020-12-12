import React, { useState, useCallback, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { getNote } from 'api';

const Notes = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [noteData, setNoteData] = useState({});
  const [mom, setMom] = useState('');

  const getNoteData = useCallback(async () => {
    const res = await getNote(id);
    setNoteData(res);
    setMom(res.markdown);
    console.log(res);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getNoteData();
  }, [getNoteData]);

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
        {noteData.title}
      </h1>
      <div className='flex mx-6 mt-16'>
        <div>
          <h1 className='text-center mb-4 text-2xl font-bold'>Meeting Notes</h1>
          <textarea
            style={{ minWidth: 650, minHeight: 650 }}
            className='leading-8 focus:outline-none focus:ring focus:border-blue-400 resize-y p-4 rounded'
            value={mom}
            onChange={(e) => setMom(e.target.value)}
          ></textarea>
        </div>
        <div className='mx-4'>
          <p>
            Meeting's Date:{' '}
            <span>
              {new Date(noteData.created_at.slice(0, 10)).toLocaleDateString()}
            </span>
          </p>
          <p>
            Meeting's Duration: <span>{noteData.duration}</span>
          </p>
          <p>
            Confidence Score: <span>{noteData.score}</span>
          </p>
          <Link className='text-blue-600 underline' to='/'>
            {' '}
            View Full Meeting's Text
          </Link>
          <button>Push to Slack/Notion</button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
