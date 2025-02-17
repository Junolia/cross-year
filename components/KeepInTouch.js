import React from 'react';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import { Button } from './Button';

const KeepInTouch = () => {
  return (
    <div>
      <div className="mt-20 w-[70%] sm:w-[100%] mx-auto font-semibold bg-no-repeat bg-center text-center bg-[url('/svgs/yellow_title.svg')]  leading-4 h-16 text-2xl sm:text-3xl">
        Keep In Touch
      </div>

      <div className="mt-7 flex flex-col justify-center items-center top-[calc(54vh + 1.2em)]">
        <form name="contact" method="POST" data-netlify="true">
          <div className="text-center relative mt-[10px] w-[175px] sm:w-[305px] inline-block ">
            <input
              type="email"
              className="w-[100%] border-0 border-b-2 border-[#000] outline-0 text-[#000] px-1 bg-transparent transition"
              placeholder="Get Email Updates"
              name="email"
              id="email"
              required
            />
          </div>
          <button id="submitForm" className="" type="submit">
            <ArrowCircleRightIcon className="h-7 p-0 -mb-2 ml-1" />
          </button>
          <input type="hidden" name="form-name" value="contact" />
        </form>
      </div>

      <div className="mt-16 mb-28  font-semibold text-center">
        <Button text="Apply to VHX!" link="https://www.vandyhacks.org" />
      </div>
    </div>
  );
};

export default KeepInTouch;
