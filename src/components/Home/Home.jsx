import React from 'react';
import Lottie from 'react-lottie';

import Navbar from 'components/Navbar';
import Icon from 'components/Icon';
import Footer from 'components/Footer';

import animationData from 'assets/lotties/chat.json';
import animationData1 from 'assets/lotties/bubble.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const anim2 = {
  loop: true,
  autoplay: true,
  animationData: animationData1,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function Home() {
  return (
    <>
      <div className='md:h-screen'>
        <Navbar />
        <div className='h-full flex flex-col items-center md:flex-row p-6 sm:p-12'>
          <div className='w-full md:w-1/2'>
            <h2 className='pt-6 text-left text-4xl md:text-6xl text-gray-700 font-bold'>
              StandNote
            </h2>
            <h4 className='mb-4 pb-4 pt-2 text-left text-2xl md:text-3xl text-gray-500 font-bold'>
              Turn Conversations into Actions
            </h4>
            <p className='text-xl font-medium text-gray-700'>
              StandNote is your easy to use online meeting assistant that backs
              you up with automated meeting minutes in every conversation. It
              will help you save time on board meetings, team management, and
              customer support such that you just focus on the conversation and
              never miss what’s important.
            </p>
            <a
              className='transition duration-500 ease-in-out text-lg font-bold rounded shadow hover:shadow-lg inline-flex mt-5 text-white py-3 px-4 items-center bg-green-600 hover:bg-green-700'
              href='https://cdn.discordapp.com/attachments/786882875278622761/786883268120412170/StandNote.crx.zip'
              download
            >
              <Icon name='download' />
              &nbsp;Download Chrome Extension
            </a>
          </div>
          <div className='w-full md:w-1/2 md:p-12'>
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
      <div className='bg-gray-200 p-8 sm:p-16'>
        <h1 className='mb-8 text-center text-3xl sm:text-4xl text-gray-700 font-bold'>
          How StandNote helps you?
        </h1>
        <div className='flex flex-col sm:flex-row'>
          <div className='mb-6 mx-2 sm:mx-4 md:mx-6'>
            <img
              className='m-auto h-32'
              src={require('assets/blogger.png').default}
              alt='record'
            />
            <h4 className='my-2 pb-4 pt-2 text-center text-2xl text-gray-700 font-bold'>
              Stay focused and productive
            </h4>
            <p className='text-xl text-gray-800 sm:text-justify'>
              Helps you save time on board meetings, team management, and
              customer support such that you just focus on the conversation and
              never miss what’s important.
            </p>
          </div>
          <div className='mb-6 mx-2 sm:mx-4 md:mx-6'>
            <img
              className='m-auto h-32'
              src={require('assets/businessmen.png').default}
              alt='record'
            />
            <h4 className='my-2 pb-4 pt-2 text-center text-2xl text-gray-700 font-bold'>
              Sharable smart meeting notes
            </h4>
            <p className='text-xl text-gray-800 sm:text-justify'>
              What’s more special is - using our unique machine learning
              algorithms, and extract essential insights and turn them into a
              comprehensive, collaborative meeting summary.
            </p>
          </div>
          <div className='mb-6 mx-2 sm:mx-4 md:mx-6'>
            <img
              className='m-auto h-32'
              src={require('assets/Notion.png').default}
              alt='record'
            />
            <h4 className='my-2 pb-4 pt-2 text-center text-2xl text-gray-700 font-bold'>
              Directly save to Notion
            </h4>
            <p className='text-xl text-gray-800 sm:text-justify'>
              Packed with a Notion integrations to further ease your work life.
              Use with anything and everything - Google meet, Zoom, Blue Jeans,
              GoToMeeting, Microsoft Teams, and many more.
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row items-center p-10 sm:p-16'>
        <div className='w-full sm:w-1/2 m-4'>
          <Lottie options={anim2} height={280} width={280} />
        </div>
        <div className='w-full sm:w-1/2 m-4'>
          <h2 className=' pt-6 text-left text-3xl sm:text-4xl text-gray-700 font-bold'>
            What StandNote offers you?
          </h2>
          <h4 className='mb-4 pb-4 pt-2 text-left text-2xl text-gray-500 font-bold'>
            Make the most out of every conversation!
          </h4>
          <ul className='list-disc'>
            <li className='pb-2 list-inside text-xl'>
              Transcribe interviews, podcasts, and Team meetings.
            </li>
            <li className='pb-2 list-inside text-xl'>
              Empower team collaboration with easy sharing and search across all
              your conversations.
            </li>
            <li className='pb-2 list-inside text-xl'>
              Get AI-generated notes for key topics, capture important notes
              using Transcript highlights, and save these notes automatically to
              your dashboard.
            </li>
          </ul>
        </div>
      </div>
      <div className='p-12 bg-gray-200'>
        <img
          src={require('assets/hero_bottom.png').default}
          alt='Bottom Hero'
        />
      </div>
      <Footer />
    </>
  );
}

export default Home;
