import React from 'react';
import { Globe } from 'react-feather';

function BylineCard({ bylineInfo }) {
  return (
    <div className="px-4 py-4 bg-white rounded-lg  shadow">
      <div className="flex">
        <div className="w-24 h-24 rounded-full border-red-800">
          <img
            className="w-full h-full"
            alt={bylineInfo.name}
            src={`https://ui-avatars.com/api/?rounded=true&name=${bylineInfo.name.split(
              " "[0]
            )}+${bylineInfo.name.split(" "[1])}`}
          />
        </div>
        <div className="ml-8">
          <h4 className="text-2xl font-bold uppercase text-cyan-600">
            {bylineInfo.name}
          </h4>
          <span className="text-md text-gray-500">@{bylineInfo.username}</span>
          <p className="mt-2 text-lg font-normal">
            {bylineInfo.name} is a {bylineInfo.company.bs} at{" "}
            {bylineInfo.company.name}.
          </p>
          <a
            href={`https://www.${bylineInfo.website}`}
             rel="noopener noreferer nofollow"
            className="mt-4 w-auto flex text-blue-500 text-md font-medium underline"
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