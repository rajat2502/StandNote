import React, { useState, useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import {
  getNote,
  deleteNote,
  updateNote,
  getNotionCredentials,
  pushMkdToNotion,
  // getSentiments,
} from 'api';

import Icon from 'components/Icon';

const Notes = ({ user }) => {
  const history = useHistory();
  const { id } = useParams();
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [noteData, setNoteData] = useState({});
  const [mom, setMom] = useState('');
  const [hasNotion, setHasNotion] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState('');
  // const [sentiments, setSentiments] = useState({});

  const changeEditing = () => {
    setEditing((state) => !state);
  };

  const viewFullText = () => {
    const newWindow = window.open('/fullContent');
    newWindow.data = noteData.content;
    newWindow.meetingHead = noteData.title;
  };

  const deleteNoteWithId = async () => {
    if (
      window.confirm('This action will delete the notes from your account!')
    ) {
      await deleteNote(noteData.id);
      history.push('/');
    }
  };

  const saveNotes = async () => {
    setSaving(true);
    setEditing(false);
    const obj = {
      email: noteData.email,
      title: noteData.title,
      content: noteData.content,
      markdown: mom,
      duration: noteData.duration,
      score: noteData.score,
    };
    obj.markdown = mom;
    const data = await updateNote(noteData.id, obj);
    setNoteData(data);
    setSaving(false);
  };

  const pushToNotion = async () => {
    setSubmitting(true);
    const obj = {
      email: user.email,
      title: 'StandNote - Meeting Notes',
      text: noteData.markdown,
    };
    const data = await pushMkdToNotion(obj);
    setSubmitting(false);
    setMsg(data);
    setTimeout(() => setMsg(''), 3000);
  };

  // const getSentimentData = useCallback(async (content) => {
  //   const res = await getSentiments(content);
  //   setSentiments(res);
  // }, []);

  const getNotionData = useCallback(async () => {
    const data = await getNotionCredentials(user.email);
    if (data.token) {
      setHasNotion(true);
    }
  }, [user.email]);

  const getNoteData = useCallback(async () => {
    const res = await getNote(id);
    setNoteData(res);
    setMom(res.markdown);
    await getNotionData();
    // Todo: await getSentimentData(res.content);
    setLoading(false);
  }, [getNotionData, id]);

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
    <div className='w-full p-6'>
      <h1 className='my-2 text-center text-4xl text-gray-700 font-bold'>
        {noteData.title}
      </h1>
      <div className='flex mx-6 mt-16'>
        <div className='w-full md:w-2/3'>
          <div className='flex items-center justify-between'>
            <h1 className='text-center mb-4 text-3xl font-bold'>
              Meeting Notes
            </h1>
            <div>
              <button
                className='focus:outline-none text-white bg-yellow-500 py-1 text-sm font-bold rounded-full px-4 mx-1'
                onClick={viewFullText}
              >
                View Full Text
              </button>
              <button
                onClick={changeEditing}
                className='focus:outline-none text-white bg-blue-500 py-1 text-sm font-bold rounded-full px-4 mx-2'
              >
                {editing ? 'Disable Edit' : 'Edit'}
              </button>
              <button
                onClick={deleteNoteWithId}
                className='focus:outline-none text-white bg-red-500 py-1 text-sm font-bold rounded-full px-4 mx-1'
              >
                Delete
              </button>
              <button
                disabled={noteData.markdown === mom || saving}
                onClick={saveNotes}
                className='focus:outline-none text-white bg-green-600 py-1 text-sm font-bold rounded-full px-4 mx-2'
              >
                {saving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
          <textarea
            style={
              editing
                ? { height: 700, fontFamily: 'monospace' }
                : { height: 700, fontFamily: 'monospace', opacity: 0.92 }
            }
            className='text-xl w-full bg-gray-800 text-white leading-7 focus:outline-none resize-y p-6 rounded'
            value={mom}
            readOnly={!editing}
            onChange={(e) => setMom(e.target.value)}
          ></textarea>
        </div>
        <div className='text-2xl p-10 flex flex-col text-gray-600 font-bold mx-4'>
          <p className='flex items-center mt-4'>
            <Icon name='date' /> &nbsp;&nbsp;
            <span>
              {new Date(noteData.created_at.slice(0, 10)).toLocaleDateString()}
            </span>
          </p>
          <p className='flex items-center mt-4'>
            <Icon name='time' /> &nbsp;&nbsp;&nbsp;
            <span>{noteData.duration}</span>
          </p>
          <p className='flex items-center mt-4'>
            <Icon name='score' /> &nbsp;&nbsp;
            <span>{noteData.score}/100</span>
          </p>
          {/* Todo: */}
          {/* <div className='my-4'>
            <p className='text-xl'>Ambience of meeting:</p>
            <p>
              <span title='Positive' className='pr-4 text-xl'>
                &#x1F604; {sentiments.positive}
              </span>
              <span title='Neutral' className='pr-4 text-xl'>
                &#x1F642; {sentiments.neutral}
              </span>
              <span title='Negative' className='pr-4 text-xl'>
                &#x1F613; {sentiments.negative}
              </span>
            </p>
          </div> */}
          <button
            onClick={pushToNotion}
            disabled={!hasNotion || submitting}
            className='text-lg focus:outline-none mt-6 font-bold shadow-md hover:shadow-lg py-2 px-8 rounded bg-white flex items-center justify-center'
          >
            <Icon name='notion' />
            Push to Notion
          </button>
          <p
            style={{ width: 240 }}
            className='mt-4 text-green-600 text-md font-normal'
          >
            {msg}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notes;
