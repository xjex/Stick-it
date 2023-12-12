"use client";
import React, { useState, useEffect } from "react";
import { Countdown } from "react-daisyui";
const Counter = (props) => {
  const [value, setValue] = useState(60);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((v) => (v <= 0 ? 60 : v - 1));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <Countdown className="font-mono text-5xl" value={props.hours} />
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <Countdown className="font-mono text-5xl" value={props.min} />
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <Countdown className="font-mono text-5xl" value={props.sec} />
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <Countdown className="font-mono text-5xl" value={value} />
        sec
      </div>
    </div>
  );
};

export default Counter;
