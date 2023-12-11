"use client";
import React, { useState } from "react";
import supabase from "./supabaseClient";
export const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitPost = async () => {
    try {
      const { data, error } = await supabase.from("Sticky").insert([
        {
          title: title,
          content: description,
          likes: 0,
        },
      ]);
      //   console.log(data, error);
    } catch (error) {
      //   console.log(error);
    }
  };
  return (
    <div>
      <div className="heading text-center font-bold text-2xl m-5">New Post</div>
      <div className="editor flex flex-col p-4 max-w-2xl rounded-md">
        <input
          className="title border p-2 mb-4"
          placeholder="Title"
          spellCheck="false"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <textarea
          className="description sec p-3 h-60 borderoutline-none"
          spellCheck="false"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe everything about this post here"
        ></textarea>

        <div className="icons flex text-gray-500 m-2">
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
          <div className="count ml-auto text-xs font-semibold">0/300</div>
        </div>

        <div className="buttons flex">
          <div className="btn border p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
            Cancel
          </div>
          <button className="btn btn-outline btn-success" onClick={submitPost}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
