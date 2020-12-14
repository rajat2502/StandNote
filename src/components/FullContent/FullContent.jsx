import React from 'react';

function FullContent() {
  return (
    <div className='p-12 min-h-screen w-full bg-gray-800 text-white'>
      <h1 className='flex items-center justify-center mb-6 text-4xl text-center font-bold text-center'>
        {window.meetingHead} - &nbsp;
        <span className='text-xl'>Raw Meeting Content</span>
      </h1>
      <code className='leading-8 p-6'>{window.data}</code>
    </div>
  );
}

export default FullContent;
