import React, { useState, useEffect, useCallback } from 'react';

import { getNotionCredentials, submitNotionCredentials } from 'api';

const Integrations = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const [notionData, setNotionData] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [token, setToken] = useState('');
  const [docLink, setDocLink] = useState('');

  const getCredentials = useCallback(async () => {
    const data = await getNotionCredentials(user.email);
    setNotionData(data);
    setLoading(false);
  }, [user.email]);

  const submitCredentials = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const obj = {
      email: user.email,
      token,
      page: docLink,
      team: '',
    };
    await submitNotionCredentials(obj);
    setNotionData(obj);
    setSubmitting(false);
  };

  useEffect(() => {
    getCredentials();
  }, [getCredentials]);

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
    <div className='flex flex-col min-h-screen items-center justify-center p-4'>
      <h1 className='mt-4 text-gray-800 text-3xl font-bold text-2xl'>
        Notion Integration Details
      </h1>
      <br />
      {notionData ? (
        <div className='font-bold text-gray-700 text-lg'>
          <p>
            Notion v2 Token:{' '}
            <span className='font-normal'>
              {notionData.token.substring(0, 30)}...
            </span>
          </p>
          <p className='mt-3'>
            Notion Doc link:{' '}
            <span className='font-normal'>{notionData.page}</span>
          </p>
        </div>
      ) : (
        <form style={{ minWidth: 330 }} onSubmit={submitCredentials}>
          <p className='text-lg font-bold text-gray-700 mt-4'>
            Notion v2 Token:
            <input
              className='w-full border-gray-300 rounded border block p-3 mt-2 text-gray-700 appearance-none focus:outline-none focus:border-gray-600'
              type='text'
              onChange={(e) => setToken(e.target.value)}
              required
              placeholder='Enter your Notion v2 token'
            />
          </p>
          <p className='text-lg font-bold text-gray-700 mt-4'>
            Notion Doc link:
            <input
              className='w-full border-gray-300 rounded border block p-3 mt-2 text-gray-700 appearance-none focus:outline-none focus:border-gray-600'
              type='text'
              onChange={(e) => setDocLink(e.target.value)}
              required
              placeholder='Enter your Notion Doc link'
            />
          </p>
          <button
            disabled={submitting}
            className='w-full focus:outline-none cursor-pointer rounded bg-green-600 p-3 text-white font-bold mt-5'
          >
            Submit Details
          </button>
          <a
            className='text-center block w-full mt-2 text-blue-600 underline text-sm'
            href='https://www.redgregory.com/notion/2020/6/15/9zuzav95gwzwewdu1dspweqbv481s5'
            rel='noreferrer'
            target='_blank'
          >
            (How to get Notion v2 Token for my account?)
          </a>
        </form>
      )}
    </div>
  );
};

export default Integrations;
