import React from 'react';

function FullContent() {
  return (
    <div className='p-12 min-h-screen w-full bg-gray-800 text-white'>
      <h1 className='mb-6 text-4xl text-center font-bold text-center'>
        Raw Meeting Content - {window.meetingHead}
      </h1>
      <code className='leading-8 p-6'>{window.data}</code>
    </div>
  );
}

export default FullContent;
