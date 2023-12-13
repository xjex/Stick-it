"use client";
import React from "react";
import { Skeleton } from "react-daisyui";
export const Loader = () => {
  return (
    <div className="flex-wrap flex-col  items-center justify-center">
      {Array.from({ length: 2 }, (i) => (
        <div className=" flex  space-4 items-center justify-center flex-row ">
          <Skeleton key={i} className="h-32 w-full p-5 m-10"></Skeleton>
        </div>
      ))}
    </div>
  );
};
