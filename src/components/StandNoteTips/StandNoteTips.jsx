import React from 'react';

const StandNoteTips = () => {
  return (
    <div className='p-4'>
      <h1 className='my-2 text-center text-4xl text-gray-700 font-bold'>
        StandNote Usage Tips&#x1F4A1;
      </h1>
      <div className='p-4 mt-8'>
        <h1 className='my-6 font-mono text-center text-coolGray-600 font-bold text-3xl'>
          ❝People want Automation, but they also need a Human touch❞
        </h1>
        <ul className='text-lg	m-4 leading-10 text-gray-700 font-bold'>
          <li>
            &#x23F2; &nbsp;For best results, meetings should be in the span of
            30 minutes. This is done to ensure that no vital information is
            lost.
          </li>
          <li>
            &#x1F18E; &nbsp;StandNote works best for English language (Indian).
            We will be adding support for more languages in the future.
          </li>
          <li>
            &#x1F507; &nbsp;For best results, sit in a noise-free enviornment.
          </li>
          <li>
            &#x1F4C3; &nbsp;Please submit your Notion credentials to sync your
            meeting notes with your Notion documents.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StandNoteTips;
