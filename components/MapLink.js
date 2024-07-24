import React from 'react';

const MapLink = ({ destination, url }) => {
  const isAfterSpecificDate = () => {
    const currentDate = new Date();
    const targetDate = new Date('2024-07-25T06:00:00');

    return currentDate >= targetDate;
  };

  if (destination === 'Bunratty' && !isAfterSpecificDate()) return (<></>);
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      className="mx-auto text-locke-red flex flex-col items-center border-2 border-locke-red rounded-3xl p-3 hover:bg-white transition duration-500 ease-in-out "
    >
      <svg
        className="h-20 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </svg>
      <div className="py-2 uppercase text-black tracking-widest font-medium text-lg">
        {destination}
      </div>
    </a>
  );
};

export default MapLink;
