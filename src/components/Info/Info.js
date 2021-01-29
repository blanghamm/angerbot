import React from 'react';

const Info = () => {
  return (
    <div className='info-container'>
      <div className='info-inner-container'>
        <h2 className='info-title'>Info</h2>
        <p className='info-para' style={{ lineHeight: '1.2' }}>
          The initial idea surrounding this concept was to allow users some
          therapeutic outburst rather than taking that anger or frustration out
          on person or animal.
          <br />
          <br />
          As I researched this concept further I found a number of articles
          talking about children using smart devices, Alexa and Google Assistant
          for example. How these devices are of course programmed to listen to
          your every command and do not require manors, nor can they answer in a
          similar way to user input.
          <br />
          <br />
          This chat bot was created using React for the frontend and using IBM
          Watson Assistant for the language processing. It also utilises,
          Node-Red for flow mapping.
        </p>
      </div>
    </div>
  );
};

export default Info;
