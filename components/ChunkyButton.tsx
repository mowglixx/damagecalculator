import React from 'react';
import Link from 'next/link';


export type ChunkyButtonProps = {
    id: String,
    linkHref: String,
    color: String,
    title: String,
    subTitle: String
};

export const ChunkyButton = ({
    id = '',
    linkHref = '/',
    color = 'blue',
    title= 'ChunkyButton Title',
    subTitle= 'ChunkyButton subTitle' }) => {


    return (
        <>
          <div id={'chunkyButton0-'+ id} className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <Link href={linkHref}>
              <a className={`p-6 mt-6 text-left border w-96 rounded-xl hover:text-${color}-600 focus:text-${color}-600 bg-white dark:bg-gray-800`}>
              <h3 className="text-2xl font-bold">{title}</h3>
            <p className="mt-4 text-xl">{subTitle}</p>
            {/* {children} */}
              </a>
            </Link>
          </div>
        </>
    )
}

export default ChunkyButton
