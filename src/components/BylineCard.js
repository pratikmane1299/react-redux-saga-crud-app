import React from 'react';
import { Globe } from 'react-feather';

function BylineCard({ bylineInfo }) {
  return (
    <div className="px-4 py-4 bg-white dark:bg-gray-700 rounded-lg shadow">
      <div className="flex">
        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-red-800">
          <img
            className="w-full h-full"
            alt={bylineInfo.name}
            src={`https://ui-avatars.com/api/?rounded=true&name=${bylineInfo.name.split(
              " "[0]
            )}+${bylineInfo.name.split(" "[1])}`}
          />
        </div>
        <div className="ml-8">
          <h4 className="text-lg lg:text-2xl font-bold uppercase text-red-500 dark:text-red-600">
            {bylineInfo.name}
          </h4>
          <span className="text-xs lg:text-md text-gray-500 dark:text-gray-300">@{bylineInfo.username}</span>
          <p className="mt-2 text-md lg:text-lg font-normal dark:text-gray-100">
            {bylineInfo.name} is a {bylineInfo.company.bs} at{" "}
            {bylineInfo.company.name}.
          </p>
          <a
            href={`https://www.${bylineInfo.website}`}
             rel="nofollow noopener noreferrer"
            className="mt-4 w-auto flex items-center text-blue-500 text-sm lg:text-md font-medium underline"
          >
            <Globe />
            <span className='ml-2'>Website</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BylineCard;