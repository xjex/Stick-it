"use client";
import React from "react";
import { Skeleton, Loading } from "react-daisyui";
export const BLoader = () => {
  return (
    <div className="flex-wrap flex-col  items-center justify-center">
      <Loading />
    </div>
  );
};
