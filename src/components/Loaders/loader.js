"use client";
import React from "react";
import { Skeleton } from "react-daisyui";
export const Loader = () => {
  return (
    <main className="h-full flex-wrap space-4 items-center justify-center">
      {Array.from({ length: 1 }, (i) => (
        <div className=" space-4 items-center justify-center" key={i}>
          <Skeleton className="h-32 w-full p-5"></Skeleton>
        </div>
      ))}
    </main>
  );
};
